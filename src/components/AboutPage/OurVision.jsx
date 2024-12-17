import React from "react";
import rightArrow from "../../public/icons/About Us/rightArrow.svg";

const Vision = () => {
  return (
    <div className=" my-[4rem]  lg:px-[4rem] ">
      <div className="flex flex-row justify-between  md:flex md:flex-row">
        <div className="bg-[#F1F5F6] vision-open cursor-pointer ">
          <h1 className="text-left text-[20px] sm:text-[72px] font-semibold leading-[19px] sm:leading-[71.28px] ">
            <span>Our</span>
            <br />
            Vision
          </h1>
          <div className="flex flex-row mt-8 gap-2 items-center justify-center">
            <p className="sm:block hidden  text-left">
              Hover to view our vision
            </p>
            <img src={rightArrow} alt="arrow" />
          </div>
          <p className="md:hidden block mt-8 ">Click to view</p>
        </div>
        <div className="bg-[#F1F5F6] mission-open cursor-pointer p-[10px]">
          <h1 className="text-right text-[20px] sm:text-[72px] font-semibold leading-[19px] sm:leading-[71.28px] ">
            <span>Our</span>
            <br />
            Mission
          </h1>
          <div className="mt-8 flex gap-2   justify-center items-center">
            <img className="-rotate-90" src={rightArrow} alt="" />
            <p className="sm:block hidden  text-right">
              Hover to view our vision
            </p>
          </div>
          <p className="md:hidden block mt-8 ">Click to view</p>
        </div>
      </div>
      <div className="text-left relative the-vision    bg-[#A71E1E] p-4 mt-[4rem] opacity-100">
        <div className="triangle w-[60px] h-[60px] absolute left-[5%] top-[-8%] md:block hidden"></div>
        <p className=" text-[20px] text-white font-normal leading-[30px] opacity-100 sm:leading-[48px] sm:text-[32px] md:block hidden">
          Our vision for NACOS is to empower future innovators in the field of
          computer science, nurturing problem solvers and critical thinkers. We
          aspire to create a global network of connected professionals,
          fostering collaboration and idea exchange. Ultimately, we envision
          leaving a lasting positive impact on the lives of our students,
          equipping them with the skills and mindset for successful careers and
          lifelong learning.
        </p>
      </div>
      <div className="text-left relative    bg-[#A71E1E] p-4 mt-[6rem] opacity-100">
        <div className="trianglemission w-[60px] h-[60px] absolute right-[5%] top-[-8%]"></div>
        <p className=" text-[20px] text-white font-normal leading-[30px] opacity-100 sm:leading-[48px] sm:text-[32px]">
          NACOS is dedicated to fostering academic excellence among computing
          students in various departments, providing resources and support
          systems to enhance learning. We are committed to facilitating
          professional development through skill-building, networking
          opportunities, and exposure to industry trends. Our mission extends to
          building a supportive community, where students can connect,
          collaborate, and share experiences. Additionally, we strive to
          organize engaging activities, including workshops and seminars,
          complementing academic studies for a holistic educational experience.
        </p>
      </div>
    </div>
  );
};

export default Vision;
