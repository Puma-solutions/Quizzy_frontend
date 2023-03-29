"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BsFillPlayCircleFill,
  BsChevronDown,
  BsPencilSquare,
  BsFillTrash3Fill,
} from "react-icons/bs";

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
  const [isHidden, setisHidden] = useState(true);

  const dropDownHandler = () => {
    isHidden ? setisHidden(false) : setisHidden(true);
  };
  return (
    <div className=" w-full bg-slate-500 flex justify-center items-between p-4 rounded-2xl flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl">{exam.name}</h3>
          <p className=" text-slate-400">{exam.countQuestions} Preguntas</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={dropDownHandler}
            className={
              isHidden
                ? "rotate-0 transition-all duration-500"
                : "rotate-180 transition-all duration-500"
            }
          >
            <BsChevronDown className=" w-7 h-7" />
          </button>
          <Link href={`http://localhost:3000/exam/${exam.id}`}>
            <button>
              <BsFillPlayCircleFill className=" w-7 h-7" />
            </button>
          </Link>
        </div>
      </div>
      <section className={isHidden ? "hidden mt-6" : "block mt-6"}>
        <article>
          {exam.questions.map((question) => (
            <div
              key={question._id}
              className="p-5 flex justify-between items-center"
            >
              <p>{question.question}</p>
              <div className="flex gap-2">
                <button>
                  <BsPencilSquare />
                </button>
                <button>
                  <BsFillTrash3Fill />
                </button>
              </div>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default SubjectDetail;
