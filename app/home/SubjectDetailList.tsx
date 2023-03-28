interface SubjectDetailListProps {
  subjectDetail: {
    name: string;
    exams: [
      {
        examName: string;
        questions: [
          {
            question: string;
            correctAnswer: string;
            id: string;
          }
        ];
      }
    ];
    id: number;
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
