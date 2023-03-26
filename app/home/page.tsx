import SubjectList from "./SubjectList"

const HomePage = () => {
  const a = [{name: 'Legislacion',
        exams: 1,
        questions: 1,}, {name: 'Fisica',
        exams: 4,
        questions: 10,}]
  return (
    <main className=" p-32 flex">
    <SubjectList subjectList={a}/>
    </main>
  )
}

export default HomePage