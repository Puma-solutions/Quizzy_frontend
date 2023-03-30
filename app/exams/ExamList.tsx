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
  const randomizeQuestions = () => {
    const a = exam.questions.sort((_, __) => Math.random() - 0.5);
    return a.map((question) => ({
      ...question,
      value: "",
    }));
  };

  const questionsRandomized = randomizeQuestions();

  const incrementCounter = (counterValue: number) => {
    counterValue === questionsRandomized.length
      ? console.log(questionsRandomized)
      : setCounter(counterValue);
  };

  return (
    <>
      <ExamQuestion
        question={questionsRandomized[counter]}
        setQuestion={incrementCounter}
        counter={counter}
      />
    </>
  );
};

export default ExamList;
