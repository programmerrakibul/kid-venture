import React, { useState } from "react";
import ForgetEmailContext from "../contexts/ForgetEmailContext";

const ForgetEmailProvider = ({ children }) => {
  const [forgetEmail, setForgetEmail] = useState("");

  return (
    <ForgetEmailContext value={{ forgetEmail, setForgetEmail }}>
      {children}
    </ForgetEmailContext>
  );
};

export default ForgetEmailProvider;
