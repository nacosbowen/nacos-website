import Footer from "../components/FirstPage/footer";
import Navbar from "../components/FirstPage/navbar";
import Staff from "../components/LevelAdvisersPage/Advisers";

const LevelAdvisers = () => {
  const levelAdvisers = [
    {
      id: 1,
      name: "Dr. John Doe",
      image: "https://via.placeholder.com/150",
      office: "Room 101",
      phone: "+234-701-234-5678",
    },
    {
      id: 2,
      name: "Prof. Jane Smith",
      image: "https://via.placeholder.com/150",
      office: "Room 203",
      phone: "+234-801-345-6789",
    },
    {
      id: 3,
      name: "Mr. Michael Brown",
      image: "https://via.placeholder.com/150",
      office: "Room 305",
      phone: "+234-811-456-7890",
    },
    {
      id: 4,
      name: "Ms. Emily Johnson",
      image: "https://via.placeholder.com/150",
      office: "Room 402",
      phone: "+234-821-567-8901",
    },
    {
      id: 5,
      name: "Dr. David Wilson",
      image: "https://via.placeholder.com/150",
      office: "Room 110",
      phone: "+234-831-678-9012",
    },
  ];

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
      <div className="mx-auto w-[80%] my-12 lg:my-24 flex flex-col gap-10 lg:gap-28">
        <Staff title="Level Advisers" data={levelAdvisers} />
        <Staff title="Program Coordinators" data={levelAdvisers} />
      </div>
      <Footer />
    </div>
  );
};

export default LevelAdvisers;
