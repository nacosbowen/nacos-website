import { FaXTwitter } from "react-icons/fa6";
import { useNacos } from "../../contexts/nacosContext";
import avatar from "../../public/images/advisers/Avatar.png";
import instagram from "./instagram.svg";
import linkedin from "./linkedin.svg";
import FloatInAnimation from "../../ui/FloatInAnimation";

const executiveYear = 2024;

const ExecutivesDetails = () => {
  const { excos, isLoading } = useNacos();
  // const textExcos = [
  //   {
  //     // url: Oshafi,
  //     fullName: "Omotiafe David Aregbeyen",
  //     position: "President",
  //     instagram: "https://instagram.com/nacosbowen",
  //     twitter: "https://instagram.com/nacosbowen",
  //     linkedIn: "https://instagram.com/nacosbowen",
  //   },
  // ];

  const positionOrder = [
    "President",
    "Vice-President",
    "General Secretary",
    "Financial Secretary",
    "Welfare Director",
    "Academic Director",
    "Hardware Director",
    "Software Director",
    "Social Director (Male)",
    "Social Director (Female)",
    "Sport Director (Male)",
    "Sport Director (Female)",
    "Public Relation Officer",
    "Chief Whip",
    "Computer Science Commissioner",
    "Cyber Security Commissioner",
    "Information Technology Commissioner",
    "Software Engineering Commissioner",
    "Assistant General Secretary",
    "Assistant Welfare Director",
    "Assistant Academic Director",
    "Assistant Hardware Director",
    "Assistant Software Director",
  ];

  // array.sort((a, b) => a - b)

  const sortedExcos = [...excos].sort((a, b) => {
    const indexA = positionOrder.indexOf(a.position);
    const indexB = positionOrder.indexOf(b.position);

    return (indexA === -1 ? 1000 : indexA) - (indexB === -1 ? 24 : indexB);
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[20rem] bg-white">
        <p className="text-xl font-bold animate-pulse">Loading Executives...</p>
      </div>
    );
  }

  return (
    <div className="mb-10">
      <>
        {!isLoading && excos.length <= 0 ? (
          <div className="flex items-center justify-center h-[20rem] bg-white">
            <p className="text-xl font-bold animate-pulse">Coming soon!</p>
          </div>
        ) : (
          <div className="executive md:px-[3rem] py-8 px-8 lg:px-[2rem] bg-gradient-to-tl from-[#0c1a3e] via-[#2b3d6a] to-[#0c1a3e] shadow-lg border-y-4 border-y-white">
            <p className=" text-base sm:text-[1.5rem] text-center text-white py-4">
              Introducing, NACOS EXECUTIVES for
              {` ${executiveYear}/${executiveYear + 1} `}Academic Session
            </p>
            <div className="grid lg:grid-cols-4 mt-8 md:mt-16 md:grid-cols-3 grid-cols-2 max-[480px]:grid-cols-1 gap-8">
              {sortedExcos?.map((executive, i) => (
                <FloatInAnimation key={i} delay={0.2}>
                  <div
                    className={`relative w-full aspect-square rounded-2xl bg-grey overflow-hidden ${
                      !executive.url ? "animate-pulse" : ""
                    }`}
                  >
                    <img
                      src={executive?.url || avatar}
                      onError={(e) => (e.target.src = avatar)}
                      className="w-full h-full object-cover object-top executive-image"
                      alt={executive?.fullName}
                    />
                    <div
                      className={`absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 focus:opacity-100 transition duration-300 ease-in-out bg-[#00000040] backdrop-filter backdrop-blur-md rounded-2xl`}
                    >
                      <div className="">
                        <div className="flex gap-6 mt-4">
                          {executive?.instagram.toLowerCase() !== "nil" && (
                            <a
                              href={executive?.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cursor-pointer w-[32px] md:w-[40.95px] md:h-[40.95px] h-[32px] flex items-center justify-center bg-[#FFFFFF] rounded-[13.48px]"
                            >
                              <img
                                src={instagram}
                                alt=""
                                className="md:w-[25.38px] md:h-[25.38px]"
                              />
                            </a>
                          )}
                          {executive?.twitter.toLowerCase() !== "nil" && (
                            <a
                              href={executive?.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cursor-pointer w-[32px] md:w-[40.95px] md:h-[40.95px] h-[32px] flex items-center justify-center bg-[#FFFFFF] rounded-[13.48px]"
                            >
                              <FaXTwitter />
                            </a>
                          )}
                          {executive?.linkedIn.toLowerCase() !== "nil" && (
                            <a
                              href={executive?.linkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cursor-pointer w-[32px] md:w-[40.95px] md:h-[40.95px] h-[32px] flex items-center justify-center bg-[#FFFFFF] rounded-[13.48px]"
                            >
                              <img
                                src={linkedin}
                                alt=""
                                className="md:w-[25.38px] md:h-[25.38px]"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <h1 className="text-[#ddd] text-[1rem] md:text-[1.5rem] text-center font-bold leading-[normal] pt-2">
                    {executive?.fullName}
                  </h1>

                  <p className="text-[#aab] text-[0.9rem] md:text-[1.25rem] font-medium leading-[normal] text-center pt-2">
                    {executive?.position}
                  </p>
                </FloatInAnimation>
              ))}
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default ExecutivesDetails;

{
  /* <div className="grid mt-8 md:mt-16 md:grid-cols-3 grid-cols-2 max-[375px]:grid-cols-1 gap-x-3 gap-y-[53px] lg:gap-y-[100px] max-w-[1550px] mx-auto px-2">
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
                    {excos?.instagram && (
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
                    )}
                    {excos?.twitter && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.7 }}
                        className="cursor-pointer w-[32px] md:w-[40.95px] md:h-[40.95px] h-[32px] flex items-center justify-center bg-[#FFFFFF] rounded-[13.48px]"
                        href={excos?.twitter}
                        style={{
                          boxShadow: " 0px 0.79px 8.72px 0px #00000026",
                        }}
                      >
                        <FaXTwitter />
                      </motion.a>
                    )}
                    {excos?.linkedIn && (
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
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div> */
}
