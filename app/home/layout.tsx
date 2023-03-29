import Navigation from "../../components/Navigation";
import SubjectListContainer from "./SubjectListContainer";
import "../../styles/home.css";

const homeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" layout-display">
      <header className="head">
        <Navigation />
      </header>
      <nav className="nav">
        <SubjectListContainer />
      </nav>
      <main className="main">{children}</main>
    </div>
  );
};

export default homeLayout;
