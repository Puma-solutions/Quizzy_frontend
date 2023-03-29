import SubjectDetailListContainer from "./SubjectDetailListContainer";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className=" w-full h-full bg-slate-700 rounded-2xl flex justify-center items-center flex-col p-10 gap-2">
      <h1 className="text-3xl">Aun no has seleccionado ninguna materia</h1>
      <p>
        Usa el menu a tu izquierda para navegar entre tus materias o crea una
        nueva
      </p>
      <Image
        src={"/animation_640_lftt4e62.gif"}
        alt="gif of a study girl"
        width="600"
        height="700"
      />
    </div>
  );
};

export default HomePage;
