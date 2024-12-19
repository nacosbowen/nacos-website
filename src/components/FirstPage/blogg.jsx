import React from "react";
import image from "../../public/images/Rectangle 1560.svg";
import arrow from "../../public/icons/Arrow - Down Circle.svg";
import { Link } from "react-router-dom";
import { useNacos } from "../../contexts/nacosContext";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
const BLOG = () => {
  const { allBlogs } = useNacos();

  const blog = allBlogs.slice(0, 3).map((item) => ({
    ...item,
    truncatedBody:
      item.bodyText.length > 150
        ? item.bodyText.slice(0, 150) + "..."
        : item.bodyText,
  }));

  if (!allBlogs)
    return (
      <div>
        <h1 className="text-black leading-[150%] text-center font-semibold md:mb-[3rem] mb-4 text-[2rem] md:text-[3rem]">
          Blog
        </h1>
        <h1>No blogs!</h1>
      </div>
    );

  return (
    <div className="md:px-[3rem] py-6 px-6 lg:px-[2rem] ">
      <h1 className="text-black leading-[150%] text-center font-semibold md:mb-[3rem] mb-4 text-[2rem] ">
        Blog
      </h1>
      <div className="grid gap-[2rem] grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-[1.5rem]">
        {blog.map((blogItem, i) => (
          <div
            key={i}
            className="shadow-lg rounded-[10px] overflow-hidden bg-white"
          >
            <div
              className="h-[200px] bg-cover bg-center"
              style={{ backgroundImage: `url(${blogItem.imageUrl})` }}
            ></div>

            <div className="p-6  grid grid-rows-[auto,auto,1fr,auto] min-h-[16.5rem]">
              <p className="text-[20px] font-semibold font-[Poppins] text-sm mb-2">
                {formatDate(blogItem.date)}
              </p>
              <h2 className="text-[22px] md:text-[24px] font-semibold font-[Poppins] mb-2">
                {blogItem.headerText}
              </h2>
              <p className="text-[15px] md:text-[16px] font-normal font-[Poppins] mb-2">
                {blogItem.truncatedBody}
              </p>
              <Link
                to={`/blogDesc/${blogItem._id}`}
                className="flex items-center gap-1 w-fit"
              >
                <p className="text-[0.8rem] md:text-[1rem] font-normal leading-[21px] sm:leading-[3rem] sm:tracking-tight">
                  Read More
                </p>
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex sm:justify-end justify-center items-center mt-6 sm:items-end mb-6">
        <Link to="/blogs">
          <button className="flex flex-row items-center gap-2 rounded-sm bg-white px-4 py-2 border border-white border-solid">
            <p className="text-dark">View other Blogs</p>
            <img src={arrow} alt="arrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BLOG;
