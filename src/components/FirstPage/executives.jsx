import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNacos } from "../../contexts/nacosContext";
import { scrollToTop } from "../../utils/utils";
import FloatInAnimation from "../../ui/FloatInAnimation";
import arrow from "../../public/icons/Arrow - Down Circle.svg";
import avatar from "../../public/images/advisers/Avatar.png";

const Executives = () => {
  const { excos } = useNacos();
  const [visibleExecutives, setVisibleExecutives] = useState(4);

  const positionOrder = [
    "President", "Vice-President", "General Secretary", "Financial Secretary",
    "Welfare Director", "Academic Director", "Hardware Director", "Software Director",
    "Social Director (Male)", "Social Director (Female)", "Sport Director (Male)", "Sport Director (Female)",
    "Public Relation Officer", "Chief Whip", "Computer Science Commissioner",
    "Cyber Security Commissioner", "Information Technology Commissioner", "Software Engineering Commissioner",
    "Assistant General Secretary", "Assistant Welfare Director", "Assistant Academic Director",
    "Assistant Hardware Director", "Assistant Software Director"
  ];

  const sortedExcos = [...excos].sort((a, b) => {
    const indexA = positionOrder.indexOf(a.position);
    const indexB = positionOrder.indexOf(b.position);
    return (indexA === -1 ? 1000 : indexA) - (indexB === -1 ? 24 : indexB);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleExecutives(4); // Large screens
      } else if (window.innerWidth >= 768) {
        setVisibleExecutives(6); // Tablets
      } else {
        setVisibleExecutives(4); // Small screens
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Listen for resizes

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="executive md:px-[3rem] py-8 px-6 lg:px-[2rem] bg-gradient-to-tl from-[#0c1a3e] via-[#2b3d6a] to-[#0c1a3e] shadow-lg">
      <h1 className="text-[#fff] text-center text-[2rem] font-bold leading-[150%]">
        Meet Our Executives
      </h1>
      {!excos.length ? (
        <p className="text-center text-[1.4rem] text-white animate-pulse py-20">
          The executives will be uploaded soon!
        </p>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 max-[480px]:grid-cols-1 gap-4 mt-8 md:mt-16">
          {sortedExcos.slice(0, visibleExecutives).map((executive, i) => (
            <FloatInAnimation key={i} delay={i * 0.2}>
              <div
                className={`relative w-full aspect-square rounded-2xl bg-grey overflow-hidden ${!executive.url ? "animate-pulse" : ""}`}
              >
                <img
                  src={executive?.url || avatar}
                  onError={(e) => (e.target.src = avatar)}
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                  alt={executive?.fullName || "Executive image not available"}
                />
              </div>
              <h1 className="text-[#ddd] text-[15px] md:text-[20px] lg:text-[25px] text-center font-bold leading-[normal]">
                {executive?.fullName}
              </h1>
              <p className="text-[#aab] text-[0.8rem] md:text-[1.25rem] font-medium leading-[normal] text-center">
                {executive?.position}
              </p>
            </FloatInAnimation>
          ))}
        </div>
      )}
      <div className="flex sm:justify-end justify-center items-center mt-6 sm:items-end mb-6">
        <Link to="/executives" onClick={scrollToTop}>
          <button className="flex flex-row items-center gap-2 rounded-sm px-4 py-2 hover:translate-x-1 active:scale-[.98] transition-all duration-100 ease-linear text-white hover:text-[var(--darkorange)]">
            <p className="flex items-center gap-1">See All Executives</p>
            <img src={arrow} alt="arrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Executives;
