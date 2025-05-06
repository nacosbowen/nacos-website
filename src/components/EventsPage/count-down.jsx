/* eslint-disable react/prop-types */
// import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Countdown = ({ date, time, name, link1 }) => {
  const COUNTDOWN_TO = `${date} ${time}`;
  const calculateTimeLeft = () => {
    const targetDate = new Date(COUNTDOWN_TO).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  return (
    <section className="hidden xl:flex bg-[#7E161680] w-fit ml-[5%] pt-[14px]">
      <div className="flex flex-col items-center text-white my-auto px-[27px]">
        <p className="text-[40px] font-semibold">
          {date.split(" ")[1].split(",")[0]}
        </p>
        <p className="text-[15px]">{date.split(" ")[0]}</p>
        <p className="text-[15px]">{date.split(" ")[2]}</p>
      </div>
      <div className="flex items-center gap-[75px] px-[48px] bg-white mt-auto h-[131px] shadow-[0px_4px_4px_0px_#00000040]">
        <p className="text-[20px] font-semibold whitespace-nowrap">{name}</p>
        <section className="flex items-center gap-[35px]">
          <CountdownItem num={timeLeft.days} text="days" />
          <CountdownItem num={timeLeft.hours} text="hours" />
          <CountdownItem num={timeLeft.minutes} text="minutes" />
          <CountdownItem num={timeLeft.seconds} text="seconds" />
        </section>
        <a href={link1}>
          <button className="py-[3.6px] md:py-[8px] lg:py-[12px] xl:py-[14.71px] md:px-[18px] lg:px-[22px] xl:px-[25.22px] whitespace-nowrap px-[10.8px] rounded-[7.2px] md:rounded-[15px] lg:rounded-[20px] xl:rounded-[26px] border md:border-[2.5px] border-[#000000] bg-[#000000] text-xs md:text-sm lg:text-[18px] xl:text-[21.02px] font-semibold text-white">
            Get Ticket
          </button>
        </a>
      </div>
    </section>
  );
};

const CountdownItem = ({ num, text }) => {
  // if (num < 0) {
  //   return (
  //     <div className="flex gap-10">
  //       <h1>Countdown completed</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="font-mono flex flex-col gap-[2px] items-center">
      <span className="text-[11.24px] text-black capitalize">{text}</span>
      <div className="text-center relative overflow-hidden bg-[#FFFDFD] h-[44px] w-[42px] flex items-center justify-center shadow-[0px_2px_4px_0px_#00000026] rounded-[5px]">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-110%" }}
            transition={{ ease: "linear", duration: 1 }}
            className="block text-[17.98px] text-black font-semibold"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Countdown;
