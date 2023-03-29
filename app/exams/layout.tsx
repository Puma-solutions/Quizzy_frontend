import Navigation from "../../components/Navigation";

const examsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="flex justify-center items-center">{children}</main>
    </>
  );
};

export default examsLayout;
