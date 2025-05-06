/* eslint-disable react/prop-types */
// import { useNacos } from "../../contexts/nacosContext";
import bg from "../../public/images/Event-Page/eventbg.jpg";
// import mainImg from "../../public/images/Event-Page/main.jpg";
import Countdown from "./count-down";

function formatTimestamp(isoString) {
  const dateObj = new Date(isoString);

  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = dateObj.toLocaleDateString("en-US", options);

  const time = dateObj.toTimeString().split(" ")[0];

  return { date, time };
}

const EventsPage = ({ nextEvent }) => {
  const { eventName, eventAbout, link1, link2, startDate } = nextEvent;
  const { date, time } = formatTimestamp(startDate);

  return (
    <div className="relative">
      <div
        className="h-[320px] md:h-auto xl:h-auto xl:py-[117px] md:py-[80px] lg:py-[100px] w-full bg-center bg-no-repeat bg-cover flex items-center px-[5%] justify-between text-white gap-[5%] relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,
        }}
      >
        <section className="mx-auto md:mx-0 flex flex-col items-center md:items-start max-w-[194px] md:max-w-[400px] lg:max-w-[582px] text-center md:text-left">
          <p className="font-semibold mb-[22px] md:mb-[18px] lg:mb-[20px] xl:mb-[15px] text-xs">
            <span className="text-[#A71E1E]">UPCOMING</span> EVENT 2024
          </p>
          <h1 className="font-bold text-[18px] md:text-[28px] lg:text-[48px] xl:text-[63.11px] mb-[27px] xl:mb-0">
            {eventName}
          </h1>
          <p className="hidden lg:block text-[20px] leading-[2.2] -tracking-[0.019em]">
            {eventAbout.slice(0, 300) + "..."}
          </p>
          <div className="flex items-center gap-[6px] md:gap-[20px] lg:gap-[30px] xl:gap-[42px]">
            <a href={link1} target="_blank" rel="noreferrer noopener">
              <button className="py-[3.6px] md:py-[8px] lg:py-[12px] xl:py-[14.71px] md:px-[18px] lg:px-[22px] xl:px-[25.22px] px-[10.8px] rounded-[7.2px] md:rounded-[15px] lg:rounded-[20px] xl:rounded-[26px] border md:border-[2.5px] border-[#A71E1E] bg-[#A71E1E] text-xs md:text-sm lg:text-[18px] xl:text-[21.02px] font-semibold">
                Get Ticket
              </button>
            </a>
            {link2 && (
              <a href={link2} target="_blank" rel="noreferrer noopener">
                <button className="py-[3.6px] md:py-[8px] lg:py-[12px] xl:py-[14.71px] md:px-[18px] lg:px-[22px] xl:px-[25.22px] px-[10.8px] rounded-[7.2px] md:rounded-[15px] lg:rounded-[20px] xl:rounded-[26px] border md:border-[2.5px] text-xs md:text-sm lg:text-[18px] xl:text-[21.02px] font-semibold">
                  Play Trailer
                </button>
              </a>
            )}
          </div>
        </section>
        <img
          className="hidden md:flex w-[300px] md:w-[500px] lg:w-[600px] xl:w-[700px] max-w-[70%] md:max-w-[50%] border-[5px] rounded-[12px] border-[#A71E1E] bg-white object-contain h-auto"
          src={nextEvent.url}
          alt=""
        />
      </div>
      <div className="absolute bottom-0 translate-y-1/2">
        <Countdown date={date} time={time} name={eventName} link1={link1} />
      </div>
    </div>
  );
};

export default EventsPage;
