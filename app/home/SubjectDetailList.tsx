interface SubjectDetailListProps {
  subjectDetail: {
    id: string;
    name: string;
    exams: {
      id: string;
      name: string;
      countQuestions: number;
      questions: {
        question: string;
        answer: string;
        _id: string;
      }[];
    }[];
  };
}

const SubjectDetailList = ({ subjectDetail }: SubjectDetailListProps) => {
  return (
    <section>
      <h1>{subjectDetail.name}</h1>
      <article></article>
    </section>
  );
};

export default SubjectDetailList;
