"use client";

import { BsFillPlayCircleFill, BsChevronDown } from "react-icons/bs";

interface SubjectExamProps {
  exam: {
    examName: string;
    questions: [
      {
        question: string;
        correctAnswer: string;
        id: string;
      }
    ];
  };
}

const SubjectExam = ({ exam }: SubjectExamProps) => {
  return (
    <div>
      <div>
        <h3>{exam.examName}</h3>
        <p>{exam.questions.length} preguntas</p>
      </div>
      <div>
        <button>
          <BsChevronDown />
        </button>
        <button>
          <BsFillPlayCircleFill />
        </button>
      </div>
    </div>
  );
};

export default SubjectExam;
