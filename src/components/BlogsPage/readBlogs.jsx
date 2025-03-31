import parse from "html-react-parser"
import { useNacos } from "../../contexts/nacosContext";
import { calculateReadTime, formatDate, getInitials } from "../../utils/utils";
import { LuDot } from "react-icons/lu";
import Divider from "../../ui/Divider";
import BlogPage from "./BlogPage";

// const filter = [
//   "All",
//   "Design",
//   "Software",
//   "Development",
//   "Tech",
//   "Techmoney",
// ];

const ReadBlogs = () => {
  const { blogWeek } = useNacos();

  if (!blogWeek) return;

  const blogArray = Array.isArray(blogWeek) ? blogWeek : [blogWeek];

  const readTime = blogArray.length && calculateReadTime(blogArray[0]?.bodyText)

  return (
    //
    <div className="bg-grey px-8  md:px-[3rem] py-2 lg:px-[4rem]">
      {blogArray?.map((blg, key) => (
        <div key={blg._id}>
          <div className="all-blogs">
            <div className="mt-10">
              <h3 className="font-medium text-[1.2rem] text-center text-darkorange sm:text-[1.8rem] leading-normal">
                BLOG OF
                <span className="bg-white shadow-lg rounded-2xl text-[1.4rem] text-darkblue sm:text-[1.7rem] ml-2 py-1 sm:py-2 px-2 sm:px-3 font-bold">
                  THE WEEK
                </span>
              </h3>

              <div className="my-10" key={key}>
                <div className="max-w-[65rem] mx-auto">
                  <div className="md:hidden">
                    <div className={`mx-auto flex justify-center items-center mt-10 mb-3 ${blg.imageUrl ? "" : "animate-pulse"}`}>
                      <img
                        className="flex justify-center items-center"
                        src={blg?.imageUrl}
                        alt="blogimage"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    {/* Weekly blog header */}
                    <div className="col-span-1 flex gap-5 w-full mb-4 items-center">
                      <div
                        className="hidden md:inline-block h-[20rem] w-[70%] bg-cover bg-center"
                        style={{ backgroundImage: `url(${blg.imageUrl})` }}
                      ></div>
                      {/* Weekly blog details */}
                      <div className="w-full items-center">
                        <h2 className="font-black mb-4 text-[1.9rem] md:text-[2.4rem] first-letter  ">
                          {blg?.headerText}
                        </h2>
                        <p className="text-[.95rem] text-[#6B6B6B] mb-4">{blg.blogSummary}</p>

                      </div>
                    </div>
                    <Divider />

                    <div className="flex gap-1 text-[.8rem] lg:text-[.95rem] items-center whitespace-nowrap flex-wrap">
                      <span className="bg-[#555] flex justify-center rounded-full h-12 w-12 text-white font-black text-center items-center">{getInitials(blg.authorName)}</span>
                      <p>{blg?.authorName}</p>
                      <span><LuDot /></span>
                      <p className="text-[#6B6B6B]">{readTime} minute read</p>
                      <span><LuDot /></span>
                      <p className="text-[#6B6B6B]">
                        {formatDate(blg?.date)}

                      </p>
                    </div>

                    <Divider />

                    <div id="bodyText" className="mt-8" >
                      {parse(blg?.bodyText)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );


  // return <BlogPage blog={blogArray}/>;
};
export default ReadBlogs;
