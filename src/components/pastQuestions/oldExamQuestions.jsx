import React from "react";
import { useState } from "react";
const OldExamQuestions = () => {
  const [departmmentOpen, setDepartmentOpen] = useState(false);
  const [levelOpen, setLevelOpen] = useState(false);
  const [semesterOpen, setSemesterOpen] = useState(false);
  const departFunc = () => {
    setDepartmentOpen(!departmmentOpen);
  };
  const levOpen = () => {
    setLevelOpen(!levelOpen);
  };
  const semOpen = () => {
    setSemesterOpen(!semesterOpen);
  };
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="16"
      viewBox="0 0 28 16"
      fill="none"
    >
      <path
        d="M2.69922 1.98703L14.1911 13.5286L25.683 1.98703"
        stroke="#fff"
        stroke-width="3.44757"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const department = [
    "Computer Science",
    "Software Engineering",
    "Cyber Security",
    "Information Technology",
  ];
  const level = ["All", "100 level", "200 level", "300 level", "400 level"];
  const semester = ["All", "1st semester", "2nd semester"];

  return (
    <div className=" px-[2rem] md:px-[3rem] md:py-2 lg:px-[4rem] lg:py-4">
      <div className="flex gap-16 items-center ">
        <div className="relative">
          <div
            className="rounded-[1.08rem] bg-[#EB2121] cursor-pointer flex gap-2 items-center w-fit  py-[1.70269rem] px-[3.47938rem] "
            onClick={departFunc}
          >
            <h1 className="text-white  text-[1.268rem] font-semibold leading-[normal] head ">
              Department
            </h1>

            <div>{arrow}</div>
          </div>
          {departmmentOpen && (
            <div className="flex justify-start p-8 items-start w-[120%] bg-white gap-[0.9rem] flex-col  rounded-[0.5rem]    px-4 py-4 absolute shadow-xl top-[100%] ">
              {department.map((sem, key) => (
                <h1
                  key={key}
                  className="text-dark text-[1.3rem] font-semibold leading-[150%] "
                >
                  {sem}
                </h1>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className="rounded-[1.08rem] cursor-pointer bg-[#EB2121] flex gap-2 items-center w-fit  py-[1.70269rem] px-[3.47938rem] "
            onClick={levOpen}
          >
            <h1 className="text-white  text-[1.268rem] font-semibold leading-[normal] head ">
              Level
            </h1>
            <div>{arrow}</div>
          </div>
          {levelOpen && (
            <div className="flex justify-start p-8 items-start w-fit bg-white gap-[0.9rem] flex-col  rounded-[0.5rem]    px-4 py-4 absolute shadow-xl top-[100%] ">
              {level.map((sem, key) => (
                <h1
                  key={key}
                  className="text-dark text-[1.3rem] font-semibold leading-[150%] "
                >
                  {sem}
                </h1>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className="rounded-[1.08rem] cursor-pointer bg-[#EB2121] flex gap-2 items-center w-fit  py-[1.70269rem] px-[3.47938rem] "
            onClick={semOpen}
          >
            <h1 className="text-white  text-[1.268rem] font-semibold leading-[normal] head ">
              Semester
            </h1>
            <div>{arrow}</div>
          </div>
          {semesterOpen && (
            <div className="flex justify-start p-8 items-start w-fit bg-white gap-[0.9rem] flex-col  rounded-[0.5rem]    px-4 py-4 absolute shadow-xl top-[100%] ">
              {semester.map((sem, key) => (
                <h1
                  key={key}
                  className="text-dark text-[1.3rem] font-semibold leading-[150%] "
                >
                  {sem}
                </h1>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OldExamQuestions;
