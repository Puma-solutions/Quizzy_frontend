import SubjectList from "./SubjectList";

const SubjectListContainer = () => {
  const a = [
    {
      countQuestions: 0,
      countExams: 0,
      id: "641f3e8d255be15628933ce2",
      name: "Legislacion",
    },
    {
      countQuestions: 3,
      countExams: 1,
      id: "641f71f2702cc6caaea5bc43",
      name: "Diseño de sistemas",
    },
    {
      countQuestions: 1,
      countExams: 1,
      id: "64230030962b0f08bb96fc74",
      name: "Materia de Prueba",
    },
  ];
  return (
    <>
      <SubjectList subjectList={a} />
    </>
  );
};

export default SubjectListContainer;
