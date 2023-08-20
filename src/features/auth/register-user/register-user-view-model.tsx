import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useRegisterUser = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const onPassword = () => {
    setEye(!eye);
  };
  const toSignIn = () => navigate("/");

  return {
    eye,
    onPassword,
    toSignIn,
  };
};
