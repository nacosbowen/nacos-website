import { useEffect } from "react";
import { scrollToTop } from "../utils/utils.js";
import Navbar from "../components/FirstPage/navbar.jsx";
import EventsPage from "../components/EventsPage/eventsPage.jsx";
import AboutEvent from "../components/EventsPage/aboutEvent.jsx";
import OtherEvents from "../components/EventsPage/otherEvents.jsx";
// import EventReview from "../components/EventsPage/eventReviews.jsx";
// import Internet from "../components/AboutPage/partners.jsx";
import Footer from "../components/FirstPage/footer.jsx";
import { useNacos } from "../contexts/nacosContext.jsx";
import Partner from "../components/AboutPage/partners.jsx";
import { LuLoaderCircle } from "react-icons/lu";

const Events = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const { events, isLoading } = useNacos();

  //sorting by time
  const sortedEvents = events.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  // filtering for upcoming events and sorting by time
  // const upcomingEvents = events
  //   .filter((event) => event.type === "upcoming")
  //   .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  const nextEvent = sortedEvents[0];
  const otherEvents = sortedEvents.slice(1, sortedEvents.length);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LuLoaderCircle className="mx-auto animate-spin" size={30} />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {!events.length ? (
        <p className="text-3xl font-bold text-center p-10 h-[50vh] flex items-center justify-center">
          No events!
        </p>
      ) : (
        <>
          <EventsPage nextEvent={nextEvent} />
          <AboutEvent nextEvent={nextEvent} />

          <OtherEvents otherEvents={otherEvents} />
          {/* <EventReview /> */}
        </>
      )}
      <Partner />
      <Footer />
    </div>
  );
};

export default Events;
