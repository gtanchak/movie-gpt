import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { appRputes } from "../../routes/routeConst";
import { auth } from "../../utils/firebase";

const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignupClick = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setLoading(false);
        navigate(appRputes.browse);
        toast.success("User created successfully", { position: "top-right" });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message, { position: "top-right" });
      });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    handleSignupClick,
    loading,
  };
};

export default useSignUp;
