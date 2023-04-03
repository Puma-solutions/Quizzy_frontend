"use client";

import ExamQuestion from "./ExamQuestion";
import { useEffect, useState } from "react";

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
        <section className="bg-slate-700 flex w-3/4 h-full flex-col justify-center items-start p-10 gap-10 rounded-2xl overflow-y-scroll">
          {newQuestions.map((question) => (
            <article className="flex flex-col gap-4 w-full" key={question._id}>
              <h3 className="text-xl">{question.question}</h3>
              <div>
                <h4 className=" text-slate-400">Your answer</h4>
                <p>{question.answerUser}</p>
              </div>
              <div>
                <h4 className="text-slate-400">Correct answer</h4>
                <p>{question.answer}</p>
              </div>
              <p className=" text-blue-300">Value: {question.value}</p>
              <div className="w-full h-0.5 bg-slate-500"></div>
            </article>
          ))}
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
