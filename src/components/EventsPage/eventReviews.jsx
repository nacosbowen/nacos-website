// import eventPicture from "../../public/images/EventFlyer/eventFlyer-1.png";

const reviews = [
  {
    name: "Zannou Daniel",
    comment:
      " Tech Fest was more than just an event; it was a catalyst for personal and professional growth. I am grateful for the opportunity to have been a part of this extraordinary experience.",
    rate: 4,
  },
  {
    name: "Sonia Kajotoni",
    comment:
      "Techfest was a bang, amazing tech personals present can’t wait for the next one. #techfestall the way.",
    rate: 5,
  },
  {
    name: "Sophia Ajibola",
    comment:
      "Tech Fest was an incredible event that left a lasting impact on me. From engaging with inspiring speakers to forging meaningful connections, the experience has been transformative.",
    rate: 5,
  },
];

const EventReview = () => {
  return (
    <div className="px-[] md:px-[3rem] md:py-2 lg:px-[4rem] ">
      <div className="flex justify-center">
        <h1 className="font-bold text-[1.5rem] md:text-[2.2rem] lg:text-[3rem] w-[45rem] text-center  leading-[2rem] sm:leading-[3rem] ">
          Participant comments from our previous events
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mt-5 mb-5 justify-items-center">
          {reviews.map((rev, key) => (
            <div
              key={key}
              className="w-3/4  max-[480px]:w-[90%] bg-[--grey] col-span-1 shadow-lg shadow-black-500/50 rounded-md"
            >
              <img src={""} className="rounded-md" alt="event" />

              <div className="p-5">
                <div className="max-w-[10rem] h-[2rem] bg-[--welcome] text-[--darkorange] font-semibold rounded-md mb-3">
                  <p className="text-center p-[0.4rem] leading-[150%] text-[0.8rem]">
                    Participant review
                  </p>
                </div>
                <p className="text-[1rem] font-medium">{rev.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventReview;
