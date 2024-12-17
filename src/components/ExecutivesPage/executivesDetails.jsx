import { useNacos } from "../../contexts/nacosContext";
import Loader from "../loader/Loader";
import instagram from "./instagram.svg";
import linkedin from "./linkedin.svg";
import { motion } from "motion/react";

const executiveYear = new Date().getFullYear();

const ExecutivesDetails = () => {
  const { excos, isLoading } = useNacos();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  // if (!excos) {
  //   return (
  //     <div className="mt-10 text-center">
  //       <h1 className="font-bold text-[2rem]">
  //         The exco's will be uploaded soon!
  //       </h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      <>
        <div className="mt-10 px-4 max-w-[731px] mx-auto">
          <h1 className="text-[1.5rem] sm:text-[2rem] font-semibold text-left md:text-center">
            NACOS EXECUTIVES
          </h1>
          <p className=" text-base sm:text-[1.5rem] text-left md:text-center">
            Introducing, NACOS EXECUTIVES for
            {` ${executiveYear}/${executiveYear + 1} `}Academic session
          </p>
        </div>
        <div className="grid mt-8 md:mt-16 md:grid-cols-3 grid-cols-2 max-[375px]:grid-cols-1 gap-y-[53px] lg:gap-y-[100px] max-w-[1550px] mx-auto">
          {excos.map((excos, i) => (
            <motion.div
              key={i}
              className={`flex flex-col items-center mx-auto md:mx-0 ${
                (i + 1) % 3 === 2 ? "md:mt-[50px] lg:mt-[83px]" : ""
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ amount: "some", once: true }}
            >
              <div className="w-[150px] h-[171.69px] rounded-[360px] md:w-[220px] md:h-[280px] lg:w-[250px] lg:h-[300px] xl:w-[343.24px] xl:h-[392.88px] overflow-clip mb-4 md:mb-6 border-[3px] border-[#a71e1e]">
                <img
                  src={excos?.url}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="flex flex-col items-center gap-2 md:gap-5">
                <div className="text-center max-w-[445px]">
                  <div className="font-bold text-[15px] text-xl lg:text-2xl">
                    {excos?.fullName}
                  </div>
                  <div className="font-medium text-base md:text-lg lg:text-xl">
                    {excos?.position}
                  </div>
                </div>
                <div
                  className="flex gap-6 md:gap-7 py-[10px] px-3 md:px-6 bg-[#D9D9D930] max-w-min mx-auto rounded-[16px] md:rounded-[32px]"
                  style={{
                    boxShadow: "0px 1.4px 7.02px 0px #00000040",
                  }}
                >
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.7 }}
                    className="cursor-pointer w-[32px] md:w-[40.95px] md:h-[40.95px] h-[32px] flex items-center justify-center bg-[#FFFFFF] rounded-[13.48px]"
                    href={excos?.instagram}
                    style={{
                      boxShadow: " 0px 0.79px 8.72px 0px #00000026",
                    }}
                  >
                    <img
                      src={instagram}
                      alt=""
                      className="md:w-[25.38px] md:h-[25.38px]"
                    />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.7 }}
                    className="cursor-pointer w-[32px] md:w-[40.95px] md:h-[40.95px] h-[32px] flex items-center justify-center bg-[#FFFFFF] rounded-[13.48px]"
                    href={excos?.linkedIn}
                    style={{
                      boxShadow: " 0px 0.79px 8.72px 0px #00000026",
                    }}
                  >
                    <img
                      src={linkedin}
                      alt=""
                      className="md:w-[25.38px] md:h-[25.38px]"
                    />
                  </motion.a>
                </div>
              </div>
              {/* <div className="flex justify-center ">
                <img
                  className="rounded-sm flex-grow h-[300px] object-cover"
                  src={excos?.url}
                  width="200px"
                  alt={excos?.fullName}
                />
              </div>
              <h1 className="mt-10 md:text-[1.5rem] text-base lg:text-[2rem] font-bold">
                {excos?.fullName}
              </h1>
              <p className="text-[0.875rem] md:text-[1.2rem] lg:text-[1.5rem] font-medium">
                {excos?.position}
              </p>
              <div className="flex flex-row gap-5 justify-center">
                {
                  <a href={`mailto:${excos?.instagram}`}>
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faInstagram}
                      size="2xl"
                    />
                  </a>
                }

                {
                  <a href={excos?.linkedin} target="blank">
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faLinkedin}
                      size="2xl"
                    />
                  </a>
                }
                {
                  <a target="blank" href={excos?.twitter}>
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faXTwitter}
                      size="2xl"
                    />
                  </a>
                }
              </div> */}
            </motion.div>
          ))}
        </div>
      </>
    </div>
  );
};

export default ExecutivesDetails;
