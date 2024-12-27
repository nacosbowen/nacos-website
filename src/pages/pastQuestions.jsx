import Navbar from "../components/FirstPage/navbar";
import HeroPastQuestion from "../components/pastQuestions/HeroPastQuestion";
import ExamQuestions from "../components/pastQuestions/ExamQuestions";
import FilterExamQuestions from "../components/pastQuestions/FilterExamQuestions";
import Partner from "../components/AboutPage/partners";
import Footer from "../components/FirstPage/footer";
import { useState } from "react";
import { useNacos } from "../contexts/nacosContext";

const PastQuestions = () => {
  const [Dept, setDept] = useState("Department");
  const [levels, setLevel] = useState("Level");
  const [semesters, setSemester] = useState("Semester");

  const { pastQuestions } = useNacos();

  let filteredExam = pastQuestions.filter(
    (pastQuestions) =>
      (Dept === "Department" ||
        Dept === "All" ||
        pastQuestions.department.includes(Dept)) &&
      (levels === "Level" ||
        levels === "All" ||
        pastQuestions.level.includes(levels)) &&
      (semesters === "Semester" ||
        semesters === "All" ||
        pastQuestions.semester.includes(semesters))
  );


  if (!pastQuestions) return;

  return (
    <div>
      <Navbar />
      <HeroPastQuestion />
      <FilterExamQuestions
        Dept={Dept}
        setDept={setDept}
        levels={levels}
        setLevel={setLevel}
        semesters={semesters}
        setSemester={setSemester}
      />
      <ExamQuestions filteredExam={filteredExam} />
      <Partner />
      <Footer />
    </div>
  );
};

export default PastQuestions;
