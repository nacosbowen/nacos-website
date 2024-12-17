import React from "react";
import { Fragment } from "react";
import arrow from "../../public/icons/Arrow - Down Circle.svg";
import { useNacos } from "../../contexts/nacosContext";
const TheBlogs = () => {
  const { allBlogs } = useNacos();
  console.log(allBlogs);

  if (!allBlogs)
    return (
      <div>
        <h1>No blogs!</h1>
      </div>
    );
  return (
    <Fragment>
      <div className="md:px-[3rem] px-[2rem] md:py-2 lg:px-[4rem] mt-[3rem] lg:mt-[6rem]  lg:py-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-12">
          {allBlogs.map((blg, key) => (
            <div key={key}>
              <img src={blg.imageUrl} alt="" />
              <div className="mt-[3rem]">
                <h3 className="text-dark text-[0.65rem] sm:text-[0.875rem] font-semibold leading-[150%] font-poppins">
                  {blg.date}
                </h3>
                <h1 className="text-dark text-[1.2rem] sm:text-[1.5rem] font-semibold leading-[150%] font-poppins  ">
                  {blg.headerText}
                </h1>
                <p className="text-dark text-[0.75rem] sm:text-[1rem] font-normal leading-[150%] font-poppins">
                  {blg.bodyText}
                </p>
                <button className="flex flex-row items-center gap-2 rounded-sm bg-white mt-5 border border-white border-solid">
                  <a href={`/blogDesc/${blg._id}`}>
                    <p className="text-[10px] sm:text-[1.2rem] md:text-[1.5rem] font-normal leading-[21px] sm:leading-[3rem] sm:tracking-tight">
                      Read More
                    </p>
                  </a>
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default TheBlogs;
