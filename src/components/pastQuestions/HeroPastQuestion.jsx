const HeroPastQuestion = () => {
  return (
    <div className="max-h-full">
      <div className="exam h-[50vh] max-w-full flex flex-col items-center justify-center gap-2">
        <h1 className="sm:text-[2rem] text-[1.5rem] md:text-[3rem] lg:text-[3rem] font-bold text-center text-white  leading-[130%] sm:leading-[150%]">
          Past Questions
        </h1>
        <p className="text-white sm:text-[1.2rem] text-[0.875rem] sm:w-fit font-normal text-center leading-[150%] sm:leading-[217%] max-w-[61rem] max-h-[7rem]">
          You can now access past questions by selecting your department and
          level
        </p>
      </div>
    </div>
  );
};

export default HeroPastQuestion;
