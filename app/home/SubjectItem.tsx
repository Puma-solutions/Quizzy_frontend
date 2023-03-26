import { BsChevronRight } from "react-icons/bs";

interface SubjectItemProps {
    subject: {
        name: string;
        exams: number;
        questions: number;
    }
}

const SubjectItem = ({subject}: SubjectItemProps) => {
  return (
    <div className=" bg-slate-700 flex flex-col p-4 rounded-xl">
        <h4 className="text-xl flex justify-between items-center gap-3">{subject.name} <BsChevronRight /></h4>
        <div className="flex">
            <p className=" text-slate-300">{subject.exams} exàmenes - {subject.questions} preguntas</p>
        </div>
    </div>
  )
}

export default SubjectItem