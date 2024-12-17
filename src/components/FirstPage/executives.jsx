import React from "react";
import { Link } from "react-router-dom";
// import president from "../../public/images/Excos-pictures/President-2.jpg";
// import vice_president from "../../public/images/Excos-pictures/Vice-President.jpg";
// import general_secretary from "../../public/images/Excos-pictures/General_Secretary.jpg";
// import financial_secretary from "../../public/images/Excos-pictures/Financial_Secretary.jpg";
import arrow from "../../public/icons/Arrow - Down Circle.svg";
import { useNacos } from "../../contexts/nacosContext";

const Executives = () => {
  const { excos } = useNacos();

  const executives = excos?.slice(0, 4);

  if (!excos)
    return (
      <div className="mt-10 text-center">
        <h1 className="text-[#A71E1E] text-center text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] font-bold leading-[150%] ">
          Meet Your Executives
        </h1>
        <h1 className="font-bold text-[2rem]">
          The exco's will be uploaded soon!
        </h1>
      </div>
    );

  return (
    <div className=" executive md:px-[3rem] py-6 px-6 lg:px-[2rem] bg-grey">
      <h1 className="text-[#A71E1E] text-center text-[2rem] font-bold leading-[150%] ">
        Meet Our Executives
      </h1>
      <div className="grid lg:grid-cols-4 mt-8 md:mt-16 md:grid-cols-3 grid-cols-2 max-[480px]:grid-cols-1 gap-4">
        {executives?.map((executive, i) => (
          <div key={i}>
            <img
              src={executive?.url}
              className=" aspect-square object-contain rounded-2xl"
              alt={executive?.fullName}
            />
            <h1 className="text-[#000] text-[15px] md:text-[20px] lg:text-[25px] text-center font-bold leading-[normal]">
              {executive?.fullName}
            </h1>

            <p className="text-[#000] text-[0.8rem] md:text-[1.25rem] font-medium leading-[normal] text-center">
              {executive?.position}
            </p>
          </div>
        ))}
      </div>
      <div className="flex sm:justify-end justify-center items-center mt-6 sm:items-end mb-6">
        <Link to="/executives">
          <button className="flex flex-row items-center gap-2 rounded-sm px-4 py-2">
            <p className="flex items-center gap-1">See all executives</p>
            <img src={arrow} alt="arrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Executives;
