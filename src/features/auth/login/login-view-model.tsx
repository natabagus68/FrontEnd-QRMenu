import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginView = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const onPassword = () => {
    setEye(!eye);
  };
  const toSignUp = () => navigate("/register");

  return {
    eye,
    onPassword,
    toSignUp,
  };
};
