/* eslint-disable react/prop-types */
const AboutEvent = ({ nextEvent }) => {
  return (
    <div className="max-h-full mx-[2rem] sm:mx-[5rem]  lg:mx-[10rem] mt-[71px] mb-[171px] lg:my-[200px]">
      <div className="flex flex-col items-center text-center leading-relaxed">
        <p className="text-[--darkorange] font-semibold text-sm">
          ABOUT THE EVENT
        </p>
        <h1 className="text-[1.5rem] md:text-[2.2rem] lg:text-[3rem] font-bold leading-[2rem] sm:leading-[4rem]">
          {nextEvent.eventName}
        </h1>
        <p className="md:text-base">{nextEvent.eventAbout}</p>
        <button className="bg-[--darkorange] w-[13rem] h-[3rem] rounded-3xl text-[--white] font-semibold text-base mt-4 mx-auto">
          <a href={nextEvent.link1} target="_blank" rel="noreferrer noopener">
            <p>Get Ticket</p>
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutEvent;
