import { useCallback, useState } from "react";
import SubjectDetailList from "./SubjectDetailList";

const SubjectDetailListContainer = () => {
  const a = {
    id: "64230030962b0f08bb96fc74",
    name: "Materia de Prueba",
    exams: [
      {
        id: "6423005a962b0f08bb96fc77",
        name: "Parcial 1",
        countQuestions: 1,
        questions: [
          {
            question: "Pregunta",
            answer: "Respuesta",
            _id: "6423007f962b0f08bb96fc7c",
          },
        ],
      },
    ],
  };

  return (
    <>
      <SubjectDetailList subjectDetail={a} />
    </>
  );
};

export default SubjectDetailListContainer;
