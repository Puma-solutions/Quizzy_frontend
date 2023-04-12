import Image from "next/image";
import "../../styles/home.css";
import { Inter } from "next/font/google";
import BoxesHome from "@/components/home/boxesHome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="homePage">
      <h1>Quizzy</h1>
      <BoxesHome />
    </main>
  );
}
