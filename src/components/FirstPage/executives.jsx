import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
// import president from "../../public/images/Excos-pictures/President-2.jpg";
// import vice_president from "../../public/images/Excos-pictures/Vice-President.jpg";
// import general_secretary from "../../public/images/Excos-pictures/General_Secretary.jpg";
// import financial_secretary from "../../public/images/Excos-pictures/Financial_Secretary.jpg";
import arrow from "../../public/icons/Arrow - Down Circle.svg";
import { useNacos } from "../../contexts/nacosContext";
import { scrollToTop } from "../../utils/utils";
import FloatInAnimation from "../../ui/FloatInAnimation";

const Executives = () => {
  const { excos } = useNacos();

  const positionOrder = [
    "President",
    "Vice-President",
    "General Secretary",
    "Financial Secretary",
    "Welfare Director",
    "Academic Director",
    "Hardware Director",
    "Software Director",
    "Social Director (Male)",
    "Social Director (Female)",
    "Sport Director (Male)",
    "Sport Director (Female)",
    "Public Relation Officer",
    "Chief Whip",
    "Computer Science Commissioner",
    "Cyber Security Commissioner",
    "Information Technology Commissioner",
    "Software Engineering Commissioner",
    "Assistant General Secretary",
    "Assistant Welfare Director",
    "Assistant Academic Director",
    "Assistant Hardware Director",
    "Assistant Software Director",
  ];
  
  const sortedExcos = [...excos].sort((a, b) => {
    const indexA = positionOrder.indexOf(a.position);
    const indexB = positionOrder.indexOf(b.position);
  
    return (indexA === -1 ? 1000 : indexA) - (indexB === -1 ? 24 : indexB);
  });

  const executives = sortedExcos?.slice(0, 4);

  return (
    <div className=" executive md:px-[3rem] py-8 px-6 lg:px-[2rem] bg-gradient-to-tl from-[#0c1a3e] via-[#2b3d6a] to-[#0c1a3e] shadow-lg">
      <h1 className="text-[#fff] text-center text-[2rem] font-bold leading-[150%] ">
        Meet Our Executives
      </h1>
      {!excos.length ? (
        <p className="text-center text-[1.4rem] text-white animate-pulse py-20">
          The executives will be uploaded soon!
        </p>
      ) : (
        <div className="grid lg:grid-cols-4 mt-8 md:mt-16 md:grid-cols-3 grid-cols-2 max-[480px]:grid-cols-1 gap-4">
          {executives?.map((executive, i) => (
            <FloatInAnimation key={i} delay={i * 0.2}>
              <div
                className={`relative w-full aspect-square rounded-2xl bg-gray-200 overflow-hidden ${
                  !executive.url ? "animate-pulse" : ""
                }`}
              >
                <img
                  src={executive?.url}
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                  alt={executive?.fullName}
                />
              </div>
              <h1 className="text-[#ddd] text-[15px] md:text-[20px] lg:text-[25px] text-center font-bold leading-[normal]">
                {executive?.fullName}
              </h1>

              <p className="text-[#ddd] text-[0.8rem] md:text-[1.25rem] font-medium leading-[normal] text-center">
                {executive?.position}
              </p>
            </FloatInAnimation>
          ))}
        </div>
      )}
      <div className="flex sm:justify-end justify-center items-center mt-6 sm:items-end mb-6">
        <Link to="/executives" onClick={scrollToTop}>
          <button className="flex flex-row items-center gap-2 rounded-sm px-4 py-2 hover:translate-x-1 active:scale-[.98] transition-all duration-100 ease-linear text-white hover:text-[var(--darkorange)]">
            <p className="flex items-center gap-1">See All Executives</p>
            <img src={arrow} alt="arrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Executives;
