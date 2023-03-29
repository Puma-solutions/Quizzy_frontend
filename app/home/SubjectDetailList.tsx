import SubjectDetail from "./SubjectDetail";

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
    <section className=" w-full flex flex-col gap-14">
      <h1 className="text-3xl">{subjectDetail.name}</h1>
      <article className="flex justify-center items-start flex-col">
        {subjectDetail.exams.map((exams) => (
          <SubjectDetail exam={exams} />
        ))}
      </article>
    </section>
  );
};

export default SubjectDetailList;
