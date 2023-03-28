'use client'
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";

interface SubjectItemProps {
    subject: {
        name: string;
        exams: number;
        questions: number;
    }
}

const SubjectItem = ({subject}: SubjectItemProps) => {
  const [SubjectTarget, setSubjectTarget] = useState('bg-slate-700 flex flex-col p-4 rounded-xl w-11/12 transition-all duration-800')

  const SubjectItemHandler = () => {
    setSubjectTarget('bg-slate-600 flex flex-col p-4 rounded-xl w-12/12 transition duration-800')
  }

  return (
    <div className={SubjectTarget} onClick={SubjectItemHandler}>
        <h4 className="text-xl flex justify-between items-center gap-3">{subject.name} <BsChevronRight /></h4>
        <div className="flex">
            <p className=" text-slate-300">{subject.exams} exàmenes - {subject.questions} preguntas</p>
        </div>
    </div>
  )
}

export default SubjectItem