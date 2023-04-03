"use client";

import ExamQuestion from "./ExamQuestion";
import { useEffect, useState } from "react";
import { BsFillPrinterFill } from "react-icons/bs";
import ExamPrint from "./ExamPrint";

interface ExamListProps {
  exam: {
    _id: string;
    name: string;
    idSubject: {
      _id: string;
      name: string;
    };
    questions: {
      question: string;
      answer: string;
      _id: string;
    }[];
  };
}

interface a {
  questions: {
    question: string;
    answer: string;
    _id: string;
    answerUser: string;
    value: string;
  }[];
}

const ExamList = ({ exam }: ExamListProps) => {
  const [counter, setCounter] = useState(0);
  const [newQuestions, setNewQuestions] = useState([
    {
      question: "",
      answer: "",
      _id: "",
      answerUser: "",
      value: "",
    },
  ]);
  const [showPrint, setShowPrint] = useState(false);
  const randomizeQuestions = () => {
    const sortedQuestions = exam.questions.sort((_, __) => Math.random() - 0.5);
    const expandedQuestions = sortedQuestions.map((question) => ({
      ...question,
      value: "",
      answerUser: "",
    }));
    setNewQuestions(expandedQuestions);
  };

  useEffect(() => {
    randomizeQuestions();
  }, []);

  const print = () => {
    window.print();
  };

  const updateCuestion = (counterValue: number, question: object) => {
    const updatedCuestions = [...newQuestions];
    updatedCuestions[counterValue - 1] = question;
    setNewQuestions(updatedCuestions);
    counterValue === newQuestions.length
      ? setShowPrint(true)
      : setCounter(counterValue);
  };

  return (
    <>
      {showPrint ? (
        <section className="h-140 w-3/4 bg-slate-700 rounded-xl overflow-y-auto">
          <div className="flex flex-col min-h-full">
            <h1 className="p-7 text-2xl font-medium">Resultados del test</h1>
            {newQuestions.map((question) => (
              <ExamPrint question={question} />
            ))}
            <button
              onClick={print}
              className="p-4 bg-blue-500 text-white mt-auto flex gap-4 justify-center items-center text-xl"
            >
              Imprimir resultado <BsFillPrinterFill />
            </button>
          </div>
        </section>
      ) : (
        <ExamQuestion
          question={newQuestions[counter]}
          updateCuestion={updateCuestion}
          counter={counter}
        />
      )}
    </>
  );
};

export default ExamList;
