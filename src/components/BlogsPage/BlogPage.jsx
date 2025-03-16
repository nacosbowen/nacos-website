import parse from "html-react-parser";
import { LuDot, LuLoaderCircle } from "react-icons/lu";
import Divider from "../../ui/Divider";
import { calculateReadTime, formatDate, scrollToTop } from "../../utils/utils";
import { getInitials } from "../../utils/utils";
import { useNacos } from "../../contexts/nacosContext";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BlogPage({ blog }) {
  if (!blog)
    return (
      <div className="flex h-full">
        <LuLoaderCircle className="mx-auto" />
      </div>
    );
  const navigate = useNavigate();

  function GoBackButton({ children = "Go back" }) {
    useEffect(() => {
      scrollToTop();
    }, []);

    return (
      <button
        onClick={() => {
          scrollToTop();
          navigate(-1) || navigate("/blogs");
        }}
        className="flex items-center gap-1"
      >
        {children}
      </button>
    );
  }

  const {
    _id: blogId,
    authorName,
    blogSummary,
    bodyText,
    category,
    date,
    headerText,
    imageUrl,
  } = blog;

  const readTime = calculateReadTime(bodyText);

  return (
    <>
      <div className="my-10 max-w-[70rem] mx-auto" key={blogId}>
        <GoBackButton>
          <IoChevronBackCircleOutline className="text-3xl hover:scale-95 active:scale-95" />
        </GoBackButton>
        <Divider />
        <div className="">
          <div className="md:hidden mx-auto flex justify-center items-center mt-10 mb-3">
            <img
              className="flex justify-center items-center"
              src={imageUrl}
              alt="blogimage"
            />
          </div>
          <div className="col-span-2">
            {/* Individual blog header */}
            <div className="col-span-1 flex gap-5 w-full items-center">
              {/* <img src={imageUrl} alt="blogimage" className="hidden md:inline-block max-w-[22rem]" /> */}
              <div
                className="hidden md:inline-block h-[20rem] w-[70%] bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
              {/* Individual blog details */}
              <div className="w-full items-center">
                <h2 className="font-bold mb-4 text-[1.9rem] md:text-[2.4rem] lg:text-[2.7rem] first-letter  ">
                  {headerText}
                </h2>
                <p className="text-[.95rem] text-[#6B6B6B] mb-4">
                  {blogSummary}
                </p>
              </div>
            </div>

            <Divider />
            <div className="flex gap-1 text-[.8rem] lg:text-[.95rem] items-center whitespace-nowrap flex-wrap mt-4">
              <span className="bg-[#555] flex justify-center rounded-full h-10 w-10 text-white font-black text-center items-center">
                {getInitials(authorName)}
              </span>

              <p className="text-[1rem]">{authorName}</p>
              <span>
                <LuDot />
              </span>
              <p className="text-[#6B6B6B]">{readTime} minute read</p>
              <span>
                <LuDot />
              </span>
              <p className="text-[#6B6B6B]">{formatDate(date)}</p>
            </div>

            <Divider />

            <div id="bodyText" className="mt-8">
              {parse(bodyText)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
