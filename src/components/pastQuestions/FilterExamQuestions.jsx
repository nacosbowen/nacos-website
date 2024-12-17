import React from "react";
import { useState } from "react";

const FilterExamQuestions = ({
  Dept,
  setDept,
  levels,
  setLevel,
  semesters,
  setSemester,
}) => {
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
  const arrow2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="8"
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
    "All",
    "Computer Science",
    "Software Engineering",
    "Cyber Security",
    "Information Technology",
  ];

  const level = ["All", "100", "200", "300", "400"];
  const semester = ["All", "First", "Second"];

  return (
    <div className="pl-3 mt-8 md:py-2 lg:py-4">
      <div className="flex my-4 sm:my-0 gap-4 md:gap-8 lg:gap-16 items-center ">
        <div className="relative">
          <div
            className="rounded-[1.08rem] bg-[#EB2121] cursor-pointer flex gap-2 items-center w-fit  py-4 sm:py-[1.3rem] lg:py-[1.70269rem] px-4 sm:px-6 lg:px-[3.47938rem] "
            onClick={departFunc}
          >
            <h1 className="text-white  text-[8px] sm:text-[1.268rem] font-semibold leading-[normal] head ">
              {Dept}
            </h1>

            <div className="sm:block hidden ">{arrow}</div>
            <div className="sm:hidden block">{arrow2}</div>
          </div>
          {departmmentOpen && (
            <div className="flex justify-start p-8 items-start w-[120%] bg-white gap-[0.4rem] sm:gap-[0.9rem] flex-col rounded-[0.5rem] px-4 py-4 absolute shadow-xl top-[100%] ">
              {department.map((dem, key) => (
                <button
                  key={dem}
                  onClick={() => {
                    setDept(dem);
                    setDepartmentOpen(false);
                  }}
                  className="text-dark text-[0.875rem] text-left sm:text-[1.3rem] font-semibold leading-[130%] sm:leading-[150%] "
                >
                  {dem}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className="rounded-[1.08rem] cursor-pointer bg-[#EB2121] flex gap-2 items-center w-fit  py-4 sm:py-[1.3rem] lg:py-[1.70269rem] px-4 sm:px-6 lg:px-[3.47938rem] "
            onClick={levOpen}
          >
            <h1 className="text-white  text-[8px] sm:text-[1.268rem] font-semibold leading-[normal] head ">
              {levels}
            </h1>
            <div className="sm:block hidden ">{arrow}</div>
            <div className="sm:hidden block">{arrow2}</div>{" "}
          </div>
          {levelOpen && (
            <div className="flex justify-start p-8 items-start w-fit bg-white gap-[0.4rem] sm:gap-[0.9rem] flex-col  rounded-[0.5rem]    px-4 py-4 absolute shadow-xl top-[100%] ">
              {level.map((lev, key) => (
                <button
                  key={lev}
                  onClick={() => {
                    setLevel(lev);
                    setLevelOpen(false);
                  }}
                  className="text-dark text-[0.875rem] text-left sm:text-[1.3rem] font-semibold leading-[130%] sm:leading-[150%] "
                >
                  {lev}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className="rounded-[1.08rem] cursor-pointer bg-[#EB2121] flex gap-2 items-center w-fit  py-4 sm:py-[1.3rem] lg:py-[1.70269rem] px-4 sm:px-6 lg:px-[3.47938rem] "
            onClick={semOpen}
          >
            <h1 className="text-white  text-[8px] sm:text-[1.268rem] font-semibold leading-[normal] head ">
              {semesters}
            </h1>
            <div className="sm:block hidden ">{arrow}</div>
            <div className="sm:hidden block">{arrow2}</div>{" "}
          </div>
          {semesterOpen && (
            <div className="flex justify-start p-8 items-start w-fit bg-white gap-[0.4rem] sm:gap-[0.9rem] flex-col  rounded-[0.5rem]    px-4 py-4 absolute shadow-xl top-[100%] ">
              {semester.map((semes) => (
                <button
                  key={semes}
                  onClick={() => {
                    setSemester(semes);
                    setSemesterOpen(false);
                  }}
                  className="text-dark text-[0.875rem] text-left sm:text-[1.3rem] font-semibold leading-[130%] sm:leading-[150%] "
                >
                  {semes}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterExamQuestions;
