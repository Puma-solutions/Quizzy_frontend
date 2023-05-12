import { AuthContextType } from "@/types/auth";
import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<AuthContextType>({
  userValidator: () => {},
});

export const AuthContextProvider = ({ children }: any) => {
  const { push } = useRouter();
  const userValidator = () => {
    const user = localStorage.getItem("user");
    !user && push("/acess");
  };
  return (
    <AuthContext.Provider value={{ userValidator }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
