"use client";

import { useRouter } from "next/router";
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

const ExamList = ({ exam }: ExamListProps) => {
  const [counter, setCounter] = useState(0);
  const [newQuestions, setNewQuestions] = useState([{}]);
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
        <></>
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
