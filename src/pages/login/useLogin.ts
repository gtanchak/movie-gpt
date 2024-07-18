import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { appRputes } from "../../routes/routeConst";
import { auth } from "../../utils/firebase";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSigninClick = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setLoading(false);
        navigate(appRputes.browse);
        toast.success("Login successfully", { position: "top-right" });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message, { position: "top-right" });
      });
  };

  return { email, setEmail, password, setPassword, handleSigninClick, loading };
};

export default useLogin;
