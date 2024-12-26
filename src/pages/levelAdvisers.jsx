import Footer from "../components/FirstPage/footer";
import Navbar from "../components/FirstPage/navbar";
import Staff from "../components/LevelAdvisersPage/Advisers";
import authorities from "../components/LevelAdvisersPage/data";

const LevelAdvisers = () => {
  return (
    <div>
      <Navbar />
      <div className="max-h-full">
        <div className="exam h-[50vh] max-w-full flex flex-col items-center justify-center ">
          <h1 className="sm:text-[2rem] text-[1.5rem] md:text-[3rem] lg:text-[4rem] font-bold text-center  text-white  leading-[130%] sm:leading-[150%]">
            Advisers & Coordinators
          </h1>
          <p className=" text-white sm:text-[1.2rem] text-[0.875rem] sm:w-fit w-2/4 max-[450px]:w-[90%] md:text-[1.5rem] font-normal  text-center leading-[150%] sm:leading-[217%] max-w-[61rem] max-h-[7rem]">
            Get to know your level advisers and program coordinators
          </p>
        </div>
      </div>
      <div className="mx-10 w-[90%] lg:mt-[92px] mt-[60px] mb-[20px] flex flex-col gap-10 lg:gap-28">
        {/* <Staff title="Level Advisers" data={levelAdvisers} /> */}
        <Staff data={authorities} />
      </div>
      <Footer />
    </div>
  );
};

export default LevelAdvisers;
