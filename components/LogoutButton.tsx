"use client";

import { BsBoxArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const logout = () => {
    fetch("logout").then(() => {
      router.push("/");
    });
  };
  return (
    <button
      onClick={logout}
      className="flex justify-center items-center transition-all btn gap-1"
    >
      <p className=" translate-x-full opacity-0">Cerrar sesion</p>
      <BsBoxArrowRight className=" fill-red-600 w-10 h-10" />
    </button>
  );
};

export default LogoutButton;
