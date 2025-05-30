import exam from "../../public/images/illustartions/exam.svg";

const ExamQuestions = ({ filteredExam }) => {
  return filteredExam.length === 0 ? (
    <div className=" flex justify-center items-center">
      <p className="text-dark py-[4rem] text-[2rem] sm:text-[3rem] font-semibold">
        Not Available!
      </p>
    </div>
  ) : (
    <div className="p-3">
      <div className="flex flex-col items-center gap-8">
        {filteredExam.map((ex, key) => (
          <div
            key={key}
            className="w-full px-2 py-4 bg-dark rounded-[8px] flex justify-between items-center gap-5 sm:px-3 sm:py-6 md:px-4 md:py-8"
          >
            <div className="flex justify-start items-center gap-1 sm:gap-4">
              <div className="max-w-20">
                <img
                  src={exam}
                  alt="exam illustration"
                  className="md:h-full h-fit w-full"
                />
              </div>
              <div className="w-full flex flex-1 flex-col justify-start items-start gap-1">
                <h4 className="font-semibold text-[10px] sm:text-[15px] md:text-[16px] text-[#cf2d2d]">
                  Course Code: {ex?.courseCode}
                </h4>
                <p className="font-semibold text-[.65rem] sm:text-[1rem] md:text-[1.2rem] text-[--white]">
                  {`Course Tittle: ${ex?.courseTitle}`}
                </p>
              </div>
            </div>

            <div className="flex justify-end w-[32%] sm:w-[25%]">
              <button className="bg-[--darkorange] lg:py-7 md:py-4 p-2 sm:p-2 lg:p-2 xl:p-[2rem] font-semibold sm:text-[10px] md:text-[13px] text-[8px] lg:text-[1rem] text-[--white] rounded-[8px]">
                <a href={ex?.url}>Download Question</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExamQuestions;
