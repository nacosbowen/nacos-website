import PropTypes from "prop-types";

const OtherEvents = ({ otherEvents }) => {
  return (
    <div className="max-h-full bg-[--darkColor]">
      <div className="m-10 flex flex-col items-center p-[5rem]">
        <div className="bg-[--darkorange] p-3 rounded-full font-bold">
          <p className="text-[--white] text-center">UPCOMING EVENTS</p>
        </div>

        {otherEvents?.length > 0 ? (
          <>
            <h1 className="text-[--white] font-bold text-[2rem] leading-[3rem] md:w-[706px] text-center">
              We Bring to you other events and conference.
            </h1>
            <div className="grid grid-cols-3 gap-7 mt-4 text-center">
              {otherEvents?.map((event, i) => (
                <div key={i}>
                  <img
                    src={event?.url}
                    className="w-96"
                    alt={event?.eventName}
                  />
                  <h1 className="text-[--white] mt-4 font-bold">
                    {event?.EventName}
                  </h1>
                  <p className="text-[--white] mt-4 font-bold">
                    {event?.startDate}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-5">
            <h1 className="text-[--white] font-bold text-[2rem] leading-[3rem] md:w-[706px] text-center">
              No Upcoming Events !!!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherEvents;

OtherEvents.propTypes = {
  otherEvents: PropTypes.array,
};
