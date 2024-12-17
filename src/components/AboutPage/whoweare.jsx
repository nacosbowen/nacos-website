import React from "react";
import rightArrow from "../../public/images/Home-Page/weui_arrow-filled.svg";

const Whoweare = () => {
  return (
    <div className="sm:px-[3rem] px-[1.5rem] py-4 md:py-8 lg:px-[4rem] lg:py-16">
      <div>
        <h1 className="text-dark md:text-[2.5rem] text-[2rem]  lg:text-[3rem] font-semibold leading-[-0.057rem] text-center md:text-left ">
          Who we are
        </h1>

        <p className="text-dark text-justify text-base sm:text-[16px] font-normal leading-[217%] lg:text-[16px] hidden md:block ">
          The Nigerian Association of Computing Students, Bowen University
          Chapter is a student body on the Bowen University campus that
          encompasses all students pursuing a degree in Computer Science, Cyber
          Security, Software Engineering, and Information Technology at Bowen
          University. The association serves as a hub for networking, learning,
          and professional development. Through a variety of events, workshops,
          and activities, NACOS Bowen provides its members with opportunities to
          enhance their technical skills, engage in hands-on projects, and stay
          updated with the latest trends and advancements in the field of
          computing. At NACOS Bowen, students have the chance to participate in
          coding competitions, hackathons, and seminars conducted by industry
          experts. These events allow students to showcase their talents and
          provide valuable insights into real-world applications of computing
          concepts.
        </p>
        <p className="md:hidden text-dark mx-[20px] text-justify text-[16px] leading-[217%] mt-[10px]">
        The Nigerian Association of Computing Students, Bowen University
          Chapter is a student body on the Bowen University campus that
          encompasses all students pursuing a degree in Computer Science, Cyber
          Security, Software Engineering, and Information Technology at Bowen
          University. The association serves as a hub for networking, learning,
          and professional development.
        </p>
        <button className="md:hidden bg-[#7D1515] flex gap-1 mx-auto h-[24px] w-[99px] justify-center items-center rounded-[24px] mt-[22px]">
        <p className="text-[12px] text-[#fff]">Read More</p>
        <img src={rightArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Whoweare;
