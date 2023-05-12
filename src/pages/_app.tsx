import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";
import { AuthContextProvider } from "@/context/auth";

const QuizzyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
};

export default QuizzyApp;
