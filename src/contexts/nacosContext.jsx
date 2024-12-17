import { createContext, useContext, useEffect, useReducer } from "react";

const nacosData = createContext();

const BASE_URL = `https://nacos-backend.vercel.app/`;

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: "" };
    case "excos/loaded":
      return { ...state, excos: action.payload, isLoading: false };
    case "events/loaded":
      return { ...state, events: action.payload, isLoading: false };
    case "pastQuestions/loaded":
      return { ...state, pastQuestions: action.payload, isLoading: false };
    case "allBlogs/loaded":
      return { ...state, allBlogs: action.payload, isLoading: false };
    case "blogWeek/loaded":
      return { ...state, blogWeek: action.payload, isLoading: false };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const initialState = {
  error: "",
  excos: [],
  events: [],
  pastQuestions: [],
  allBlogs: [],
  blogWeek: [],
  isLoading: false,
};

function NacosContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (endpoint, actionType, errorMessage) => {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`);
      if (!response.ok) throw new Error(errorMessage);
      const data = await response.json();
      if (data.statusCode === "404") throw new Error("Data not found (404)");
      dispatch({ type: actionType, payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  };

  useEffect(() => {
    fetchData("excos/", "excos/loaded", "Error fetching executives");
    fetchData("events/current", "events/loaded", "Error fetching events");
    fetchData("past-questions", "pastQuestions/loaded", "Error fetching past questions");
    fetchData("blog/weekly", "blogWeek/loaded", "Error fetching blog of the week");
    fetchData("blog/", "allBlogs/loaded", "Error fetching blogs");
  }, []);

  return (
    <nacosData.Provider value={{ ...state }}>
      {children}
    </nacosData.Provider>
  );
}

function useNacos() {
  const context = useContext(nacosData);
  if (!context) {
    throw new Error("useNacos must be used within a NacosContext provider");
  }
  return context;
}

export { NacosContext, useNacos };
