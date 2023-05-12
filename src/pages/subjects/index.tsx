import { useAuthContext } from "@/context/auth";
import React from "react";

const SubjectsPage = () => {
  const { userValidator } = useAuthContext();
  return <div>SubjectsPage</div>;
};

export default SubjectsPage;
