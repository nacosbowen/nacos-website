import React from "react";
import { Fragment } from "react";
import arrow from "../../public/icons/Arrow - Down Circle.svg";
import { useNacos } from "../../contexts/nacosContext";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const TheBlogs = () => {
  const { allBlogs } = useNacos();

  const blog = allBlogs.map((item) => ({
    ...item,
    truncatedBody:
      item.bodyText.length > 150
        ? item.bodyText.slice(0, 150) + "..."
        : item.bodyText,
  }));

  if (!allBlogs)
    return (
      <div>
        <h1>No blogs!</h1>
      </div>
    );
  return (
    <Fragment>
      <div className="md:px-[3rem] px-[2rem] md:py-2 lg:px-[4rem] mt-[3rem] lg:mt-[6rem]  lg:py-4 mb-10">
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

              <div className="p-6">
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
      </div>
    </Fragment>
  );
};

export default TheBlogs;
