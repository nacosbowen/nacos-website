import { useNacos } from "../../contexts/nacosContext";
import React from "react";

const EventsPage = () => {
  const { events } = useNacos();
  console.log(events);

  const mainEvent = events.filter((events) => events.type === "main");
  console.log(mainEvent);
  return (
    <div className="max-h-full">
      <div className="events h-[90vh]  lg:grid grid-cols-2 lg:grid-rows-4 items-center md:flex md:flex-col">
        <React.Fragment>
          {mainEvent?.map((event) => (
            <>
              <div className="ml-5 lg:row-span-3 leading-relaxed  h-fit">
                <p className="font-semibold text-[--white] text-base">
                  <span className="text-[--darkorange]">UPCOMING</span> EVENT
                  2024
                </p>
                <h1 className="text-6xl font-bold text-white">{event?.name}</h1>
              </div>
              <div className="lg:row-span-3 md:row-span-1 h-[67vh] w-fit">
                <img
                  src={event?.flyer}
                  className="currentEvents object-top"
                  alt="events"
                />
              </div>
            </>
          ))}
        </React.Fragment>
      </div>
    </div>
  );
};

export default EventsPage;
