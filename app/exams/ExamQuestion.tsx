"use client";

import { useState } from "react";

interface ExamQuestionProps {
  question: {
    question: string;
    answer: string;
    _id: string;
  };
  setQuestion: Function;
}

const ExamQuestion = ({ question, setQuestion }: ExamQuestionProps) => {
  const [show, setShow] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  return (
    <div className="bg-slate-700 flex w-3/4 h-140 flex-col justify-start items-center p-6 gap-6 rounded-2xl">
      <h2 className="text-xl">{question.question}</h2>
      {!show ? (
        <form action="" className="flex flex-col w-3/4 h-4/5 gap-4">
          <textarea className="h-3/4 border-none outline-none text-black resize-none p-4 rounded-xl" />
          <button
            className=" bg-yellow-500 text-black p-3 rounded-xl w-1/4 m-auto"
            type="submit"
          >
            Comprobar respuesta
          </button>
        </form>
      ) : (
        <></>
      )}
      <button className="bg-sky-700 text-white p-3 rounded-xl">
        Terminar examen
      </button>
    </div>
  );
};

export default ExamQuestion;
