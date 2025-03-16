import React from "react";
import image from "../../public/images/Rectangle 1560.svg";
import arrow from "../../public/icons/Arrow - Down Circle.svg";
import { Link } from "react-router-dom";
import { useNacos } from "../../contexts/nacosContext";
import { scrollToTop } from "../../utils/utils";
import FloatInAnimation from "../../ui/FloatInAnimation";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
const BLOG = ({ header, link, blogList, headerDivider = false }) => {
  const { allBlogs, isLoading } = useNacos();

  const blog = blogList ? blogList : allBlogs.slice(0, 3).map((item) => ({
    ...item,
    truncatedBody:
      item.bodyText.length > 150
        ? item.bodyText.slice(0, 150) + "..."
        : item.bodyText,
  }));

  if (isLoading)
    return <p className="animate-pulse">Loading blogs...</p>;

  return (
    <div className="md:px-[3rem] py-6 px-6 lg:px-[2rem] box-border">
      <h1 className={`text-darkorange leading-[150%] text-center font-semibold md:mb-[3rem] mb-4 text-[2rem] ${headerDivider ? 'blog-list-header' : ''}`}>
        {header}
      </h1>
      {!blog.length ? <p className="text-center text-[1.4rem] text-darkblue animate-pulse py-20">
          No blogs available!
        </p> : <div className="grid gap-[2rem] grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-[1.5rem]">
        {blog.map((blogItem, i) => (
          <FloatInAnimation
            key={i}
            delay={i * 0.2}
            className="shadow-lg rounded-[10px] overflow-hidden bg-white"
          >
            <div
              className="h-[200px] bg-cover bg-center"
              style={{ backgroundImage: `url(${blogItem.imageUrl})` }}
            ></div>

            <div className="p-6 flex flex-col justify-between min-h-[18rem]" >
              <div>
                <p className="text-[20px] font-semibold font-[Poppins] text-sm mb-2 text-darkorange">
                  {formatDate(blogItem.date)}
                </p>
                <h2 className="text-[22px] md:text-[24px] text-darkblue font-semibold font-[Poppins] mb-2 line-clamp-2">
                  {blogItem.headerText}
                </h2>
                <p className="text-[15px] md:text-[16px] font-normal font-[Poppins] mb-2 line-clamp-4 text-[#6B6B6B]">
                  {blogItem.blogSummary}
                </p>
              </div>
              <Link
                to={`/blogDesc/${blogItem._id}`}
                className="flex items-center gap-1 w-fit mt-auto hover:scale-[.98] active:scale-[.98] transition-all duration-100 ease-linear"
                onClick={scrollToTop}
              >
                <p className="text-[0.8rem] md:text-[1rem] font-normal leading-[21px] sm:leading-[3rem] sm:tracking-tight text-darkblue hover:text-darkorange">
                  Continue Reading
                </p>
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </FloatInAnimation>
        ))}
      </div>}
      {link && <div className="flex sm:justify-end justify-center items-center mt-6 sm:items-end mb-6" onClick={scrollToTop}>
        <Link to={link}>
          <button className="flex flex-row items-center gap-2 rounded-sm bg-white px-4 py-2 border border-white border-solid hover:translate-x-1 active:scale-[.98] transition-all duration-100 ease-linear text-dark hover:text-darkorange">
            <p className="">More from Our Blog</p>
            <img src={arrow} alt="arrow" />
          </button>
        </Link>
      </div>}
    </div>
  );
};

export default BLOG;
