import { useState } from "react";
import male from "../../public/images/Ellipse 409.png";
import male2 from '../../public/images/Ellipse 414.png'
import female from "../../public/images/Ellipse 410.png";
import female2 from '../../public/images/Ellipse 415.png'

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(email);
  };
  return (
    <div className="w-full px-[50px]">
      <div className="relative w-full px-[91px] rounded-[20px] shadow mb-[20px] pb-[61px] bg-[#efebeb] ">
        <img src={male} alt="" className="relative top-[70px] lg:left-[20%] "/>
        <img
          src={female2}
          alt=""
          className="relative top-[75px] left-[-30px] "
        />
        <img src={male2} alt="" className="relative top-[90px] left-[70%]" />
        <img
          src={female}
          alt=""
          className="relative top-[110px] left-[80%]"
        />
        <p className="text-center font-semibold text-lg mb-[24px] md:text-2xl md:w-[500px] md:mx-auto">
          Subscribe to our newsletter for any info and update
        </p>
        <div className="flex bg-white w-[300px] h-[40px] p-[5px] rounded-[15px] md:mx-auto md:w-[500px] ">
          <input
            type="email"
            placeholder="Email Address"
            className="text-[12px] w-[300px] px-[5px] md:w-[500px] focus:outline-none"
            onChange={handleEmail}
          />
          <button
            className="bg-[#A51A28] rounded-[13px] text-[12px] p-[15px] flex justify-center items-center text-[#fff]"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
