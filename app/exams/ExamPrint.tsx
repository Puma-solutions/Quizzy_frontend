interface ExamPrintProps {
  question: {
    question: string;
    _id: string;
    answerUser: string;
    answer: string;
    value: string;
  };
}

const ExamPrint = ({ question }: ExamPrintProps) => {
  return (
    <div className="flex flex-col gap-4 w-full p-6" key={question._id}>
      <h3 className="text-xl">{question.question}</h3>
      <div>
        <h4 className=" text-slate-400">Your answer</h4>
        <p>{question.answerUser}</p>
      </div>
      <div>
        <h4 className="text-slate-400">Correct answer</h4>
        <p>{question.answer}</p>
      </div>
      <p className=" text-blue-300">Value: {question.value}</p>
      <div className="w-full h-0.5 bg-slate-500"></div>
    </div>
  );
};

export default ExamPrint;
