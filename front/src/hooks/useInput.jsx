import { useState } from "react";

const UseInput = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return {
    inputs,
    handleChange,
  };
};

export default UseInput;