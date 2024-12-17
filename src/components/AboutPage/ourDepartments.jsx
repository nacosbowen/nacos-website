import { React, useState } from "react";
import computerScience from "../../public/images/about-us-page/computer_science.svg";
import informationTechnology from "../../public/images/about-us-page/OBJECTS.svg";
import softwareIllustration from "../../public/images/about-us-page/Software_Enginnering.svg";
import cyber_security from "../../public/images/about-us-page/Cyber_Security.svg";
const OurDepartments = () => {
  const [state, setState] = useState(0);
  const departments = [
    "Computer Science",
    "Software Engineering",
    "Cyber Security",
    "Information Technology",
  ];
  const clicked = (i) => {
    setState(i);
  };
  const departmentInfo = [
    {
      name: "Computer Science",
      icon: computerScience,
      details:
        "The Department of Computer Science offers a comprehensive academic program focusing on the principles and practices of computing. From theoretical foundations to practical applications, students delve into algorithms, data structures, artificial intelligence, and more, preparing them for diverse career paths in technology.",
    },
    {
      name: "Software Engineering",
      icon: softwareIllustration,
      details:
        "Within the realm of software engineering, students explore the systematic design, development, and maintenance of software systems. Emphasizing both technical proficiency and collaborative problem-solving skills, this department equips individuals with the tools to create robust, scalable, and efficient software solutions.",
    },
    {
      name: "Cyber Security ",
      icon: cyber_security,
      details:
        "In response to the growing importance of safeguarding digital assets, the Cybersecurity department offers specialized training in protecting information systems and networks from cyber threats. Through hands-on experience in risk assessment, encryption techniques, and incident response, students develop the critical skills needed to defend against cyber attacks and ensure the integrity of digital infrastructure.",
    },
    {
      name: "Information technology ",
      icon: informationTechnology,
      details:
        " The Information Technology department caters to those interested in the management and utilization of technology within organizations. With a blend of coursework in systems analysis, database management, and network administration, students gain the expertise to effectively implement and optimize technology solutions to meet business needs.",
    },
  ];
  return (
    <div className="sm:px-[3rem] px-[1.5rem] my-12  lg:px-[4rem] ">
      <div>
        <h1 className="text-center text-[20px] leading-[72px] font-semibold sm:text-[48px] mb-[30px] md:mb-[100px]">
          Our Departments
        </h1>
      </div>
      <div className="flex items-center justify-between">
        {departments.map((dep, i) => (
          <div key={i} className="">
            <div className=" flex justify-center items-center   flex-col">
              <div
                className={`bg-[#A71E1E] w-fit rounded-full p-2 sm:p-4 border-[0.5rem] sm:border-[1rem] cursor-pointer border-[#EFEBEB] ${
                  state === i ? "bg-[#A71E1E]" : "bg-[#D4CDCD]"
                }`}
                onClick={() => {
                  clicked(i);
                }}
              ></div>

              <h1
                className={`text-[6px] sm:text-[16px] leading-[24px] font-semibold text-[#] text-center ${
                  state === i ? "text-[#000]" : "text-[#D4CDCD]"
                } `}
              >
                {dep}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="my-12">
        <h1 className="text-[14px] md:text-[24px] text-[#657174] font-semibold leading-[39px] text-left ">
          Department
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2  gap-8">
          <div className="flex xl:hidden justify-center items-center w-[200px] md:w-[450px] mx-auto">
            <img src={departmentInfo[state].icon} alt="" />
          </div>
          <div>
            <h1 className="text-[30px] xl:text-left text-center sm:text-[64px] leading-[40px] sm:leading-[96px] font-semibold text-[#000] mb-[20px]">
              {departmentInfo[state].name}
            </h1>

            <p className="text-[16px] sm:text-[17px] font-medium leading-[217%] sm:leading-[30px] text-justify ">
              {departmentInfo[state].details}
            </p>
          </div>
          <div className="hidden w-full xl:block justify-center items-center">
            <img className="w-[90%]" src={departmentInfo[state].icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDepartments;
