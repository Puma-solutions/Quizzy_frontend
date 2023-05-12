import { AuthContextType } from "@/types/auth";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<AuthContextType>({
  userValidator: () => false,
});

export const AuthContextProvider = ({ children }: any) => {
  const userValidator = () => {
    const user = localStorage.getItem("AUTH");
    if (!user) {
      return false;
    }
    return true;
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
