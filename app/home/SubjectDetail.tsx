import { BsFillPlayCircleFill, BsChevronDown } from "react-icons/bs";

interface SubjectDetailProps {
  exam: {
    id: string;
    name: string;
    countQuestions: number;
    questions: {
      question: string;
      answer: string;
      _id: string;
    }[];
  };
}

const SubjectDetail = ({ exam }: SubjectDetailProps) => {
  return (
    <div className=" w-full bg-slate-500 flex justify-between items-center p-4 rounded-2xl">
      <div>
        <h3 className="text-xl">{exam.name}</h3>
        <p className=" text-slate-400">{exam.countQuestions} Preguntas</p>
      </div>
      <div className="flex gap-4">
        <button>
          <BsChevronDown className=" w-7 h-7" />
        </button>
        <button>
          <BsFillPlayCircleFill className=" w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default SubjectDetail;
