"use client";

import { useState, useEffect } from "react";

interface ExamQuestionProps {
  question: {
    question: string;
    answer: string;
    _id: string;
    value: string;
    answerUser: string;
  };
  setQuestion: Function;
  counter: number;
}

const ExamQuestion = ({
  question,
  setQuestion,
  counter,
}: ExamQuestionProps) => {
  console.log("hola");
  const [show, setShow] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const answerHandler = (e: any) => {
    setUserAnswer(e.target.value);
  };

  const answerSubmitHandler = () => {
    setShow(true);
  };

  const valueAnswerHandler = (e: any) => {
    setShow(false);
    question.value = e.target.id;
    question.answerUser = userAnswer;
    console.log("question", question);
    setQuestion(counter + 1);
  };
  return (
    <div className="bg-slate-700 flex w-3/4 h-140 flex-col justify-start items-center p-6 gap-6 rounded-2xl">
      <h2 className="text-xl">{question.question}</h2>
      {!show ? (
        <form
          className="flex flex-col w-3/4 h-4/5 gap-4"
          onSubmit={answerSubmitHandler}
        >
          <textarea
            className="h-3/4 border-none outline-none text-black resize-none p-4 rounded-xl"
            onChange={answerHandler}
          />
          <button
            className=" bg-yellow-500 text-black p-3 rounded-xl w-1/4 m-auto"
            type="submit"
          >
            Comprobar respuesta
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-5">
          <div className=" bg-slate-800 p-4 rounded-lg flex flex-col gap-2">
            <h4 className="text-xl">Tu respuesta</h4>
            <p className=" font-light">{userAnswer}</p>
          </div>
          <div className=" bg-slate-800 p-4 rounded-lg flex flex-col gap-2">
            <h4 className="text-xl">Respuesta correcta</h4>
            <p className=" font-light">{question.answer}</p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={valueAnswerHandler}
              className=" bg-red-600 p-2 rounded-lg"
              id="false"
            >
              Respuesta incorrecta
            </button>
            <button
              onClick={valueAnswerHandler}
              className=" bg-green-600 p-2 rounded-lg"
              id="true"
            >
              Respuesta correcta
            </button>
          </div>
        </div>
      )}
      <button className="bg-sky-700 text-white p-3 rounded-xl">
        Terminar examen
      </button>
    </div>
  );
};

export default ExamQuestion;
