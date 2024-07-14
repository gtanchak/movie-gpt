import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../utils/firebase";

const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignupClick = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setLoading(false);
        console.log(user);
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
