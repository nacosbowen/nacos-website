import React, { useState } from "react";
import rightArrow from "../../public/images/Home-Page/weui_arrow-filled.svg";

const Whoweare = () => {
  const data = [
    {
      label: "Our Story",
      header: "Who we are",
      text: "The Nigerian Association of Computing Students, Bowen University Chapter is a student body on the Bowen University campus that encompasses all students pursuing a degree in Computer Science, Cyber Security, Software Engineering, and Information Technology at Bowen University. The association serves as a hub for networking, learning, and professional development.\n\n Through a variety of events, workshops, and activities, NACOS Bowen provides its members with opportunities to enhance their technical skills, engage in hands-on projects, and stay updated with the latest trends and advancements in the field of computing. At NACOS Bowen, students have the chance to participate in coding competitions, hackathons, and seminars conducted by industry experts. These events allow students to showcase their talents and provide valuable insights into real-world applications of computing concepts."
    },
    {
      label: "Our Vision",
      header: "Our Vision",
      text: "Our vision for NACOS is to empower future innovators in the field of computer science, nurturing problem solvers and critical thinkers. We aspire to create a global network of connected professionals, fostering collaboration and idea exchange. Ultimately, we envision leaving a lasting positive impact on the lives of our students, equipping them with the skills and mindset for successful careers and lifelong learning."
    },
    {
      label: "Our Mission",
      header: "Our Mission",
      text: "NACOS is dedicated to fostering academic excellence among computing students in various departments, providing resources and support systems to enhance learning. We are committed to facilitating professional development through skill-building, networking opportunities, and exposure to industry trends.\n\n Our mission extends to building a supportive community, where students can connect, collaborate, and share experiences. Additionally, we strive to organize engaging activities, including workshops and seminars, complementing academic studies for a holistic educational experience."
    },
  ]

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="sm:px-[3rem] px-[1.5rem] py-8 lg:px-[4rem] lg:py-16 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-3 items-center justify-around text-center bg-grey mb-10">
        {
          data.map((item, index) => {
            return <button 
              key={index} 
              onClick={()=>setActiveTab(index)}
              className={`px-1 py-3 w-[1fr] font-bold h-full text-md ${activeTab === index ? "bg-darkorange text-white" : ""}`}
            >
              {item.label}
            </button>
          })
        }
      </div>
      
      {
        data.filter((item, index) => index === activeTab).map((item) => {
          const paragraphs = item.text.split('\n\n');

          return (
            <div className="max-w-[1000px] mx-auto" key={item.label}>
              <h1 className="text-dark text-[1.8rem]  font-semibold leading-[-0.057rem] text-left capitalize ">
                {item.header}
              </h1>
              <p className="text-dark text-left text-base sm:text-[16px] font-normal leading-[217%] lg:text-[16px]">
                {paragraphs[0]}
              </p>
              <br />
              <p className="text-dark text-left text-base sm:text-[16px] font-normal leading-[217%] lg:text-[16px]">
                {paragraphs[1]}
              </p>
            </div>
          )
        })
      }
    </div>
  );
};

export default Whoweare;
