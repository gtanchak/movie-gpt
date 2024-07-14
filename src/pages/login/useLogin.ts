import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../utils/firebase";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSigninClick = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { email, setEmail, password, setPassword, handleSigninClick };
};

export default useLogin;
