import Navbar from "../components/FirstPage/navbar.jsx";
import EventsPage from "../components/EventsPage/eventsPage.jsx";
import CountDown from "../components/EventsPage/count-down.jsx";
import AboutEvent from "../components/EventsPage/aboutEvent.jsx";
import OtherEvents from "../components/EventsPage/otherEvents.jsx";
import EventReview from "../components/EventsPage/eventReviews.jsx";
import Internet from "../components/AboutPage/partners.jsx";
import Footer from "../components/FirstPage/footer.jsx";

const Events = () => {
  return (
    <div>
      <Navbar />
      <EventsPage />

      <CountDown />

      <AboutEvent />

      <OtherEvents />
      <EventReview />

      <Internet />
      <Footer />
    </div>
  );
};

export default Events;
