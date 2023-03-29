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
    return exam.questions.sort((_, __) => Math.random() - 0.5);
  };

  const questionsRandomized = randomizeQuestions();

  return (
    <>
      <ExamQuestion
        question={questionsRandomized[counter]}
        setQuestion={setCounter}
      />
    </>
  );
};

export default ExamList;
