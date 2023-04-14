import Image from "next/image";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <h1 className="">Aun no has seleccionado ninguna materia</h1>
      <p>
        Usa el menu a tu izquierda para navegar entre tus materias o crea una
        nueva
      </p>
      <Image
        src={"/images/lookingFor.gif"}
        alt="gif of a study girl"
        width="300"
        height="300"
      />
    </div>
  );
};

export default HomePage;
