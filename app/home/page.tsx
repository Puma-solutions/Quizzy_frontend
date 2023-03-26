import SubjectList from "./SubjectList"

const HomePage = () => {
  const a = [{name: 'Legislacion',
        exams: 1,
        questions: 1,}, {name: 'Fisica',
        exams: 4,
        questions: 10,}]
  return (
    <>
    <SubjectList subjectList={a} />
    </>
  )
}

export default HomePage