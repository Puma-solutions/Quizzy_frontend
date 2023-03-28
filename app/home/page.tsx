import SubjectList from "./SubjectList"

const HomePage = () => {
  const a = [{name: 'Legislacion',
        exams: 1,
        questions: 1, id: 3042}, {name: 'Fisica',
        exams: 4,
        questions: 10, id: 3041}]
  return (
    <main className=" p-32 flex">
    <SubjectList subjectList={a}/>
    </main>
  )
}

export default HomePage