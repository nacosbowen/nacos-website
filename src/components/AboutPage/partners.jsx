import Marquee from 'react-fast-marquee'
// import React, { useEffect, useRef, useState } from "react";
import techstart from "../../public/images/partners/techstart.svg";
import DSN from "../../public/images/partners/dsn.svg";
import cicso from "../../public/images/partners/cisco-logo-transparent.svg";
import polygon from "../../public/images/partners/Polygon_blockchain_logo.svg";
import google from "../../public/images/partners/google.svg";
import SCA from "../../public/images/partners/SCA.svg";

const Partner = () => {
  const images = [techstart, DSN, cicso, polygon, google, SCA];
  
  return (
    <div className="py-[20px]">

      <Marquee  pauseOnHover={true} speed={150} autoFill={true}>
        {images.map((img, i) => (
          <div
            key={i}
            className="mx-[30px] md:mx-[60px]"
          >

            <img className="w-[80%] sm:w-fit" key={i} src={img} alt={img} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partner;
