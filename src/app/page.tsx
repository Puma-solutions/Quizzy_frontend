import Image from "next/image";
import "../../styles/home.css";
import { Inter } from "next/font/google";
import BoxesHome from "@/components/home/boxesHome";
import ButtonHomeRedirect from "@/components/button";
import { Button } from "antd";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="homePage">
      <div className="homeLeft">
        <h1 className="homeBrand">Quizzy</h1>
        {/* <div className="boxHomeBrand"></div> */}
        <h3 className="homeSlogan">
          Estudia de la forma mas rápida y eficiente
        </h3>
        <Link href={"/home"}>
          <ButtonHomeRedirect text="Empieza ya!" darkMode={false} />
        </Link>
      </div>
      <BoxesHome />
    </main>
  );
}
