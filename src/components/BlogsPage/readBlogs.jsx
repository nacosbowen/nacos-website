import arrow from "../../public/icons/Arrow - Down Circle.svg";
import { useNacos } from "../../contexts/nacosContext";
import { formatDate } from "./TheBlogs";
import { GoDotFill } from "react-icons/go";
import { LuDot } from "react-icons/lu";
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

  const blogArray = Array.isArray(blogWeek) ? blogWeek : [blogWeek];


  if (!blogWeek) return;

  return (
    //
    <div className=" px-8  md:px-[3rem] py-2 lg:px-[4rem] ">
      {blogArray?.map((blg, key) => (
        <div key={key}>
          <div className="all-blogs">
            <div className="mt-10">
              <h3 className="font-medium text-[1.2rem] text-center sm:text-[1.8rem] leading-normal">
                BLOG OF
                <span className="bg-[--grey2] rounded-2xl text-[1.2rem] sm:text-[1.7rem] ml-2 py-1 sm:py-2 px-1 sm:px-3 font-bold">
                  THE WEEK
                </span>
              </h3>

              <div className="my-10" key={key}>
                <div className="">
                  <div className="md:hidden">
                    <div className="mx-auto flex justify-center items-center my-10">
                      <img
                        className="flex justify-center items-center"
                        src={blg?.imageUrl}
                        alt="blogimage"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    {/* Weekly blog header */}
                    <div className="col-span-1 flex gap-5 w-full mb-8 items-center">
                      <img src={blg?.imageUrl} alt="blogimage" className="hidden md:inline-block max-w-[20rem]" />
                      {/* Weekly blog details */}
                      <div className="w-full items-center">
                        <h2 className="font-bold mb-4 text-[1.9rem] md:text-[2.4rem] lg:text-[2.9rem] first-letter  ">
                          {blg?.headerText}
                        </h2>
                        <div className="flex gap-1 text-[.8rem] lg:text-[.95rem] items-center whitespace-nowrap flex-wrap">
                          <p>John Doe</p>
                          <span><LuDot /></span>
                          <p className="text-[#6B6B6B]">4 minute read</p>
                          <span><LuDot /></span>
                          <p className="text-[#6B6B6B]">
                            {formatDate(blg?.date)}
                            {/* <p className="text-[.8rem] md:text-[1rem] mb-4 font-bold leading-[21px] sm:leading-[3rem] sm:tracking-tight">
                              {formatDate(blg?.date)}
                            </p> */}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-[1rem] font-normal leading-[2rem] sm:tracking-tight">
                      {blg?.bodyText}
                    </p>

                    {/* <button className="flex flex-row items-center gap-2 rounded-sm bg-white mt-10 border border-white border-solid">
                      <a href={`/blogDesc/${blg?._id}`}>
                        <p className="text-[10px] sm:text-[1.2rem] md:text-[1.5rem] font-normal leading-[21px] sm:leading-[3rem] sm:tracking-tight">
                          Read More
                        </p>
                      </a>
                      <img src={arrow} alt="arrow" />
                    </button> */}


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ReadBlogs;
