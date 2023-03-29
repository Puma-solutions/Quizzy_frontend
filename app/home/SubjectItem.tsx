"use client";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";

interface SubjectItemProps {
  subject: {
    countQuestions: number;
    countExams: number;
    id: string;
    name: string;
  };
}

const SubjectItem = ({ subject }: SubjectItemProps) => {
  const [isActive, setIsActive] = useState(false);

  const SubjectItemHandler = () => {
    setIsActive(true);
  };

  return (
    <Link href={`http://localhost:3000/home/${subject.id}`}>
      <div
        className={
          isActive
            ? "bg-slate-600 flex flex-col p-4 rounded-xl w-12/12 transition-all duration-800"
            : "bg-slate-700 flex flex-col p-4 rounded-xl w-11/12 transition-all duration-800"
        }
        onClick={SubjectItemHandler}
      >
        <h4 className="text-xl flex justify-between items-center gap-3">
          {subject.name} <BsChevronRight />
        </h4>
        <div className="flex">
          <p className=" text-slate-300">
            {subject.countExams} exàmenes - {subject.countQuestions} preguntas
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SubjectItem;
