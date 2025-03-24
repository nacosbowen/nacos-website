import React, { useState, useCallback } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const FilterExamQuestions = ({ Dept, setDept, levels, setLevel, semesters, setSemester }) => {
  const [dropdowns, setDropdowns] = useState({
    department: false,
    level: false,
    semester: false,
  });

  const toggleDropdown = useCallback((key) => {
    setDropdowns((prev) => ({
      department: key === "department" ? !prev.department : false,
      level: key === "level" ? !prev.level : false,
      semester: key === "semester" ? !prev.semester : false,
    }));
  }, []);

  const departmentOptions = ["All", "Computer Science", "Software Engineering", "Cyber Security", "Information Technology"];
  const levelOptions = ["All", "100", "200", "300", "400"];
  const semesterOptions = ["All", "First", "Second"];

  const Dropdown = ({ label, selected, options, setSelected, isOpen, toggle }) => (
    <div className="relative">
      <button
        className="rounded-[1.08rem] bg-darkorange cursor-pointer flex gap-2 items-center w-fit py-1 sm:py-2 lg:py-4 px-2 sm:px-4 md:px-6 lg:px-[3.4rem]"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="text-white text-[.75rem] sm:text-[1.2rem] font-semibold">{selected}</span>
        <MdKeyboardArrowDown className={`text-white text-2xl transition-all ${isOpen && 'rotate-180'}`} />
      </button>

      {isOpen && (
        <div className="absolute w-max bg-white rounded-[0.5rem] shadow-xl top-[100%] z-50">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                toggle();
              }}
              className="block w-full text-left text-dark text-[0.95rem] sm:text-[1rem]  py-3 px-4 hover:bg-grey"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="px-3 mt-8 md:py-2 lg:py-4">
      <div className="flex my-4 sm:my-0 gap-2 lg:gap-4 items-center">
        <Dropdown label="Department" selected={Dept} options={departmentOptions} setSelected={setDept} isOpen={dropdowns.department} toggle={() => toggleDropdown("department")} />
        <Dropdown label="Level" selected={levels} options={levelOptions} setSelected={setLevel} isOpen={dropdowns.level} toggle={() => toggleDropdown("level")} />
        <Dropdown label="Semester" selected={semesters} options={semesterOptions} setSelected={setSemester} isOpen={dropdowns.semester} toggle={() => toggleDropdown("semester")} />
      </div>
    </div>
  );
};

export default FilterExamQuestions;
