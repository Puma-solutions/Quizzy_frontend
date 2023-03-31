"use client";

import ExamQuestion from "./ExamQuestion";
import { useState } from "react";

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
  const randomizeQuestions = () => {
    const sortedQuestions = exam.questions.sort((_, __) => Math.random() - 0.5);
    const expandedQuestions = sortedQuestions.map((question) => ({
      ...question,
      value: "",
      answerUser: "",
    }));
    setNewQuestions(expandedQuestions);
  };

  randomizeQuestions();

  const incrementCounter = (counterValue: number) => {
    counterValue === newQuestions.length
      ? console.log(newQuestions)
      : setCounter(counterValue);
  };

  return (
    <>
      <ExamQuestion
        question={newQuestions[counter]}
        setQuestion={incrementCounter}
        counter={counter}
      />
    </>
  );
};

export default ExamList;
