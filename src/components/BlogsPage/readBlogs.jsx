import arrow from "../../public/icons/Arrow - Down Circle.svg";
import { useNacos } from "../../contexts/nacosContext";
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

  console.log(blogArray);

  if (!blogWeek) return;

  return (
    //
    <div className=" px-8  md:px-[3rem] py-2 lg:px-[4rem] ">
      {blogArray?.map((blg, key) => (
        <div>
          <div className="all-blogs">
            <div className="mt-10">
              <h3 className="font-medium text-[8px] text-center sm:text-[1.8rem] leading-normal">
                BLOG OF
                <span className="bg-[--grey2] rounded-2xl text-[8px] sm:text-[1.7rem] ml-2 py-1 sm:py-2 px-1 sm:px-3">
                  THE WEEK
                </span>
              </h3>

              <div className="mt-10" key={key}>
                <div className="lg:grid lg:grid-cols-3 ">
                  <div className=" lg:hidden ">
                    <div className=" mx-auto flex justify-center  items-center my-10">
                      <img
                        className="flex justify-center items-center"
                        src={blg?.image}
                        alt="blogimage"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <h1 className="font-bold mb-4 lg:w-[80%] md:text-left text-center text-[1.5rem] sm:text-xl md:text-6xl  first-letter leading-[28px] sm:leading-[5rem] ">
                      {blg?.headerText}
                    </h1>
                    <p className="text-[10px] sm:text-[1.2rem] md:text-[1.5rem] font-normal leading-[21px] sm:leading-[3rem] sm:tracking-tight">
                      {blg?.bodyText}
                    </p>
                    <p className="text-[10px] mt-10  sm:text-[1.2rem] md:text-[1.5rem] font-normal leading-[21px] sm:leading-[3rem] sm:tracking-tight">
                      Author: {blg?.date}
                    </p>
                    <button className="flex flex-row items-center gap-2 rounded-sm bg-white mt-10 border border-white border-solid">
                      <a href={`/blogDesc/${blg?._id}`}>
                        <p className="text-[10px] sm:text-[1.2rem] md:text-[1.5rem] font-normal leading-[21px] sm:leading-[3rem] sm:tracking-tight">
                          Read More
                        </p>
                      </a>
                      <img src={arrow} alt="arrow" />
                    </button>
                  </div>
                  <div className="col-span-1 lg:block hidden">
                    <img src={blg?.imageUrl} alt="blogimage" />
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
