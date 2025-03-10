import React from "react";
import { Fragment } from "react";
import arrow from "../../public/icons/Arrow - Down Circle.svg";
import { formatDate, scrollToTop } from "../../utils/utils"
import { useNacos } from "../../contexts/nacosContext";
import { Link } from "react-router-dom";
import FloatInAnimation from "../../ui/FloatInAnimation";

const TheBlogs = () => {
  const { allBlogs } = useNacos();

  const blog = allBlogs.map((item) => ({
    ...item,
    truncatedBody:
      item.blogSummary.length > 150
        ? item.blogSummary.slice(0, 150) + "..."
        : item.blogSummary,
  }));

  if (!allBlogs.length)
    return (
      <div>
        <p className="text-3xl font-bold text-center p-10">No blogs!</p>
      </div>
    );
  return (
    <div className="bg-gradient-to-tl from-[#0c1a3e] via-[#2b3d6a] to-[#0c1a3e] shadow-lg py-8">
      <h3 className="font-bold text-[1.2rem] text-center uppercase sm:text-[1.8rem] leading-normal text-white">Blogs</h3>
      <div className="md:px-[3rem] px-[2rem] md:py-2 lg:px-[4rem] mt-[3rem] lg:mt-[4rem]  lg:py-4 mb-10">
        <div className="grid gap-[2rem] grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-[1.5rem]">
          {blog.map((blogItem, i) => (
            <FloatInAnimation delay={i * 0.2}
              key={i}
              className="shadow-lg rounded-[10px] overflow-hidden bg-white"
            >
              <div
                className="h-[200px] bg-cover bg-center"
                style={{ backgroundImage: `url(${blogItem.imageUrl})` }}
              ></div>

              <div className="p-6 md:pb-2 grid grid-rows-[auto,auto,1fr,auto] min-h-[18.5rem]">
                <p className="text-[20px] font-black font-[Poppins] text-sm text-darkorange mb-2">
                  {formatDate(blogItem.date)}
                </p>
                <h2 className="text-[22px] md:text-[24px] font-semibold font-[Poppins] mb-2 line-clamp-2">
                  {blogItem.headerText}
                </h2>
                <p className="text-[15px] md:text-[16px] font-normal font-[Poppins] text-[#6B6B6B] mb-2 line-clamp-3 text-ellipsis">
                  {blogItem.truncatedBody}
                </p>
                <Link
                  to={`/blogDesc/${blogItem._id}`}
                  className="flex items-center gap-1 w-fit hover:scale-[.98] active:scale-[.98] transition-all duration-100 ease-linear"
                  onClick={scrollToTop}
                >
                  <p className="text-[0.8rem] md:text-[1rem] font-normal leading-[21px] sm:leading-[3rem] sm:tracking-tight hover:text-darkorange">
                    Continue Reading
                  </p>
                  <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </FloatInAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheBlogs;
