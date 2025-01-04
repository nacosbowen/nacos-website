import React from "react";
// import {motion} from 'framer-motion'

import { useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Connection", "Collaboration", "Excellence"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <div className="max-h-full">
      <div className=" h-[100vh] max-w-full hero">
        <div className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col  justify-center items-center">
          <h1 className="text-center font-bold rounded-[0.625rem] px-[1.1325rem] py-[0.8125rem] my-6 w-fit max-w-[90%] nacostext bg-[#FAB5B5] text-[--white] font-Poppins leading-[157.5%] text-[1.3rem] text-[#F8CDCD]">
            Welcome To NACOS BOWEN CHAPTER
          </h1>

          <p className="text-white sm:w-[88%] text-center font-semibold font-Poppins text-[1.4rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.25981rem] my-4">
            Empowering Future Innovators through
            <br />
            {text}
            <span>
              {/* {" "} */}
              <Cursor />
            </span>
          </p>

          <p className="text-center text-white lg:text-[1.451rem] md:text-[1rem] text-[0.95rem] py-3 mt-10 leading-[157.5%] font-normal sm:w-[60%] max-w-[95%]">
            NACOS is a computing department in Bowen University that leverages on
            effective learning through advance technology and tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
