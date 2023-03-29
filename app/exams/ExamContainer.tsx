import ExamList from "./ExamList";

const myfetchjaja = {
  _id: "6423005a962b0f08bb96fc77",
  name: "Parcial 1",
  idSubject: {
    _id: "64230030962b0f08bb96fc74",
    name: "Materia de Prueba",
  },
  questions: [
    {
      _id: "digfsiofjs1",
      question: "¿Que son los patrones grasp?¿Para que sirven?",
      answer:
        "Los patrones GRASP son patrones generales de software para asignar responsabilidades. Describen los principios fundamentales del diseño de objetos y la asignación de responsabilidades, en forma de patrones </br> Una responsabilidad es la obligacion de una clase de conocer o hacer </br> Hacer: </br> •Hacer algo el mismo </br> •Iniciar una accion en otros objetos </br> •Controlar y coordinar actividad en otros objetos </br> Conocer: </br> •Conocer datos privados </br> •Iniciar una accion en otros objetos </br> •Controlar y coordinar actividad en otros objetos",
    },
    {
      _id: "digfsiofjs2",
      question: "Post condicion y estado final",
      answer:
        "Una post condición o garantía de éxito establece qué debe cumplirse cuando el caso de uso se completa con éxito. La garantía debería satisfacer las necesidades de todo el personal involucrado  </br> El estado final se valida que las insancias de las entidades se hayan creado o modificado",
    },
    {
      _id: "digfsiofjs3",
      question: "Cuales son los patrones grasp?",
      answer:
        "Son 9. Experto,Creador,Controlador,Alta cohesion,bajo acoplamiento,polimorfismo, fabricacion pura, indireccion, variaciones protegidas",
    },
  ],
};

const ExamContainer = () => {
  return (
    <>
      <ExamList exam={myfetchjaja} />
    </>
  );
};

export default ExamContainer;
