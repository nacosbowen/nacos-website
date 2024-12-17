import rightArrow from "../../public/icons/About Us/rightArrow.svg";
import rightArrow2 from "../../public/icons/About Us/leftArrow.svg";
import { useEffect, useState } from "react";

const AboutBody = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = (content) => {
    if (isMobile) {
      setModalContent(content);
      setIsModalOpen(true);
    }
  };
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 mx-[5vw] md:mx-0">
      <div
        className={`sm:px-[3rem] px-[1.5rem] py-4 md:py-8 lg:px-[4rem] lg:py-16 ${
          isModalOpen ? "blur-sm" : "blur-none"
        }`}
      >
        <div className=" flex flex-col md:flex-row items-start gap-[20px] ">
          <div className="vision">
            <div
              className="bg-[#F1F5F6] md:w-[40vw] md:h-[419px] pl-6 pt-12 pb-8 pr-20 cursor-pointer transition duration-150 ease-in-out vision-card rounded-lg"
              onClick={() =>
                openModal(
                  "Our vision for NACOS is to empower future innovators in the " +
                    " field of computer science, nurturing problem solvers and " +
                    " critical thinkers. We aspire to create a global network of " +
                    " connected professionals, fostering collaboration and idea " +
                    " exchange. Ultimately, we envision leaving a lasting positive " +
                    " impact on the lives of our students, equipping them with the " +
                    " skills and mindset for successful careers and lifelong " +
                    " learning."
                )
              }
            >
              <h1 className="text-left text-[20px] sm:text-[60px] font-semibold leading-[19px] sm:leading-[71.28px] ">
                <span>Our</span>
                <br />
                Vision
              </h1>
              <div className="flex flex-row mt-8 gap-2 items-center ">
                <p className="md:block hidden text-left">
                  Hover to view our vision
                </p>
                <p className="md:hidden block text-left">
                  click to view our vision
                </p>
                <img
                  className="firstMissionArray"
                  src={rightArrow}
                  alt="arrow"
                />
                <img
                  className="secondMissionArray"
                  src={rightArrow2}
                  alt="arrow"
                />
              </div>
            </div>
            {!isMobile && (
              <div className="mt-5 vision-box hidden md:block">
                <div className="triangle"></div>
                <div className="w-[90vw] h-auto bg-[--darkorange]">
                  <p className="text-[1rem] text-white font-medium leading-[1.5rem] sm:leading-[3rem] tracking-[-0.038rem] p-8 relative">
                    Our vision for NACOS is to empower future innovators in the
                    field of computer science, nurturing problem solvers and
                    critical thinkers. We aspire to create a global network of
                    connected professionals, fostering collaboration and idea
                    exchange. Ultimately, we envision leaving a lasting positive
                    impact on the lives of our students, equipping them with the
                    skills and mindset for successful careers and lifelong
                    learning.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mission "
            onClick=
            {() =>
              openModal(
                "NACOS is dedcated to fostering academic excellence among computing students in various departments, providing resources and support systems to enhance learning. We are committed to facilitating professional development through skill-building, networking opportunities, and exposure to industry trends. Our mission extends to building a supportive community, where students can connect, collaborate, and share experiences. Additionally, we strive to organize engaging activities, including workshops and seminars, complementing academic studies for a holistic educational experience."
              )
            }
            >
            <div className="bg-[#F1F5F6] md:w-[40vw] md:h-[419px] pr-6 pt-12 pb-8 pl-16 cursor-pointer transition duration-150 ease-in-out vision-card rounded-lg">
              <h1 className="text-right text-[20px] sm:text-[60px] font-semibold leading-[19px] sm:leading-[71.28px] ">
                <span>Our</span>
                <br />
                Mission
              </h1>
              <div className="flex flex-row mt-8 gap-2 justify-end  ">
                <img
                  className="secondMissionArray"
                  src={rightArrow2}
                  alt="arrow"
                />
                <img
                  className="firstMissionArray"
                  src={rightArrow}
                  alt="arrow"
                />
                <p className="md:block hidden text-right">
                  Hover to view our mission
                </p>
                <p className="md:hidden block text-right">
                  click to view our mission
                </p>
              </div>
            </div>
            {!isModalOpen && (
              <div className="mt-5 mission-box hidden md:block">
                <div className="triangleMission"></div>
                <div className="w-[90vw] h-auto bg-[--darkorange]">
                  <p className="text-[1rem] text-white font-medium leading-[1.5rem] sm:leading-[3rem] tracking-[-0.038rem] p-8 hidden md:block">
                    NACOS is dedicated to fostering academic excellence among
                    computing students in various departments, providing
                    resources and support systems to enhance learning. We are
                    committed to facilitating professional development through
                    skill-building, networking opportunities, and exposure to
                    industry trends. Our mission extends to building a
                    supportive community, where students can connect,
                    collaborate, and share experiences. Additionally, we strive
                    to organize engaging activities, including workshops and
                    seminars, complementing academic studies for a holistic
                    educational experience.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center bg-[#000] bg-opacity-60 pt-[10vh]">
          <div className="w-11/12 max-w-md p-6 bg-[#7D1515] rounded-lg shadow-lg h-[80%] overflow-auto">
            <div className="flex justify-between">
              <h2 className="text-[24px] font-bold text-[#fff]">
                {modalContent.includes("vision") ? "Our Vision" : "Our Mission"}
              </h2>
              <button
                className="px-4 py-2 text-white"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
            <p className="text-white mt-4 leading-[250%]">{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default AboutBody;
