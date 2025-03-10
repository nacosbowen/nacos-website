import React, { useState } from "react";
import computerScience from "../../public/images/about-us-page/computer_science.svg";
import informationTechnology from "../../public/images/about-us-page/OBJECTS.svg";
import softwareIllustration from "../../public/images/about-us-page/Software_Enginnering.svg";
import cyber_security from "../../public/images/about-us-page/Cyber_Security.svg";
import FloatInAnimation from "../../ui/FloatInAnimation";
import { motion } from "framer-motion";

const OurDepartments = () => {
  const [activeTab, setActiveTab] = useState(0);

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
      name: "Cyber Security",
      icon: cyber_security,
      details:
        "In response to the growing importance of safeguarding digital assets, the Cybersecurity department offers specialized training in protecting information systems and networks from cyber threats. Through hands-on experience in risk assessment, encryption techniques, and incident response, students develop the critical skills needed to defend against cyber attacks and ensure the integrity of digital infrastructure.",
    },
    {
      name: "Information Technology",
      icon: informationTechnology,
      details:
        "The Information Technology department caters to those interested in the management and utilization of technology within organizations. With a blend of coursework in systems analysis, database management, and network administration, students gain the expertise to effectively implement and optimize technology solutions to meet business needs.",
    },
  ];

  return (
    <div className="sm:px-[3rem] px-[1.5rem] my-12 lg:px-[4rem] max-w-[1600px] mx-auto">
      <h1 className="text-center text-[1.6rem] leading-[72px] font-semibold sm:text-[2rem] mb-[1rem] md:mb-[2.5rem] uppercase text-darkblue department-heading">
        Our Programmes
      </h1>

      <div className="flex gap-4 items-center justify-between relative dept-button-container">
        {departmentInfo.map((dep, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`dept-button ${activeTab === i ? "active" : ""}`}
          >
            <div className="flex justify-center items-center flex-col">
              <div
                className={`bg-[#A71E1E] w-fit rounded-full p-2 sm:p-4 border-[0.5rem] sm:border-[1rem] cursor-pointer border-[#ebeeef] ${activeTab === i ? "bg-[#A71E1E]" : "bg-[#D4CDCD]"
                  }`}
              ></div>
              <h5
                className={`text-[.7rem] sm:text-[16px] md:leading-[24px] font-semibold ${activeTab === i ? "text-[#000]" : "text-[#D4CDCD]"
                  }`}
              >
                {dep.name}
              </h5>
            </div>
          </button>
        ))}
      </div>

      {departmentInfo.filter((_, i) => i === activeTab).map((dep) => (
        <FloatInAnimation key={dep.name}>
          <div className="my-12 max-w-[1000px] mx-auto">
            <h3 className="text-[14px] md:text-[24px] text-[#657174] font-semibold text-left">
              Department
            </h3>
            <h5 className="text-[30px] text-center sm:text-[2.2rem] leading-[40px] sm:leading-[96px] font-semibold text-darkblue">
              {dep.name}
            </h5>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                className="flex justify-center items-center w-[200px] md:w-[450px] mx-auto"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ amount: "some", once: true }}
              >
                <img src={dep.icon} alt={dep.name} className="w-full" />
              </motion.div>
              <motion.p
                className="text-[16px] sm:text-[17px] font-medium leading-[217%] sm:leading-[30px] md:leading-[220%] text-left"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ amount: "some", once: true }}
              >
                {dep.details}
              </motion.p>
            </div>
          </div>
        </FloatInAnimation>
      ))}
    </div>
  );
};

export default OurDepartments;
