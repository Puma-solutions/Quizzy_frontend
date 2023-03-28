import SubjectItem from "./SubjectItem";

interface SubjectListProps {
    subjectList: {
        name: string;
        exams: number;
        questions: number;
        id: number;
    }[]
}

const SubjectList = ({subjectList}: SubjectListProps) => {
  return (
    <section className="flex flex-col gap-4">
        <h2 className=" text-3xl">Mis materias</h2>
        <div className=" w-full h-0.5 bg-slate-200 rounded-xl"></div>
        <article className="flex flex-col w-80 gap-5">
            {subjectList.map(subject => <SubjectItem subject={subject} key={subject.id}/>)}
        </article>
    </section>
  )
}

export default SubjectList