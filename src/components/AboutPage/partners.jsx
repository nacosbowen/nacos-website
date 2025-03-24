import Marquee from 'react-fast-marquee'
// import React, { useEffect, useRef, useState } from "react";
import techstart from "../../public/images/partners/techstart.svg";
import DSN from "../../public/images/partners/dsn.svg";
import cicso from "../../public/images/partners/cisco-logo-transparent.svg";
import polygon from "../../public/images/partners/Polygon_blockchain_logo.svg";
import google from "../../public/images/partners/google.svg";
import SCA from "../../public/images/partners/SCA.svg";
import GivingSphere from "../../public/images/partners/givingsphere.png";

const Partner = () => {
  const images = [
    { name: 'techstart', image: techstart },
    { name: 'DSN', image: DSN },
    { name: 'cisco', image: cicso },
    { name: 'polygon', image: polygon },
    { name: 'google', image: google },
    { name: 'she code africa', image: SCA },
    { name: 'giving sphere', image: GivingSphere },
  ];
  
  return (
    <div className="py-[20px] bg-white">

      <Marquee  pauseOnHover={false} speed={75} autoFill={true}>
        {images.map((img, i) => (
          <div
            key={i}
            className="mx-[30px] md:mx-[60px] h-10 my-4 max-w-20"
          >
            <img className="w-full h-full sm:w-fit" key={i} src={img.image} alt={img.name} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partner;
