import React from "react";

interface ButtonWhiteProps {
  text: string;
  darkMode: boolean;
}

const ButtonWhite = ({ text, darkMode = false }: ButtonWhiteProps) => {
  return (
    <button className={darkMode ? "buttonBlack" : "buttonWhite"}>{text}</button>
  );
};

export default ButtonWhite;
