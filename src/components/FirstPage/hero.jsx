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
    <div className="">
      <div className=" h-full max-w-full hero grid place-items-center">
        <div className="w-full h-[90vh] grid place-items-center grid-rows-6">
          
          <h1 className="text-center font-bold rounded-[0.625rem] px-[1.1325rem] py-[0.8125rem] my-6 w-fit max-w-[90%] nacostext bg-[#FAB5B5] text-[#ddd] font-Poppins leading-[157.5%] sm:text-.9rem lg:text-[1.3rem] row-span-3">
            Welcome To NACOS BOWEN CHAPTER
          </h1>

          <p className="text-white sm:w-[88%] text-center font-semibold font-Poppins text-[1.4rem] md:text-[2rem] lg:text-[3rem] my-4">
            Empowering Future Innovators through
            <br />
            {text}
            <span>
              {/* {" "} */}
              <Cursor />
            </span>
          </p>
          
          <p className="text-center text-white lg:text-[1.2rem] md:text-[1rem] text-[0.95rem] py-3 mt-2 lg:mt-10 leading-[157.5%] font-normal sm:w-[65%] max-w-[95%] row-span-5">
          NACOS Bowen is a vibrant community of innovators and problem-solvers, dedicated to harnessing the power of technology to drive positive change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
