import { IconLoader2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Header } from "../../components";
import { appRputes } from "../../routes/routeConst";
import useSignUp from "./useSignUp";

const SignUp = () => {
  const {
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
    handleSignupClick,
    loading,
  } = useSignUp();

  return (
    <main className="bg-black relative h-screen z-0">
      <div className="absolute bg-cover h-screen overflow-hidden -z-10 opacity-50">
        <img src="/movie-bg.jpeg" />
      </div>
      <Header />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/6 py-5 px-20 bg-black/60">
        <h1 className="text-2xl mb-5 text-white ">Sign Up</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="px-3 py-3.5 bg-transparent border border-gray-500 rounded-sm outline-none text-white"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="px-3 py-3.5 bg-transparent border border-gray-500 rounded-sm outline-none text-white"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="px-3 py-3.5 bg-transparent border border-gray-500 rounded-sm outline-none text-white"
          />
          <button
            onClick={handleSignupClick}
            className="bg-primary text-white py-2 rounded-sm flex justify-center items-center"
          >
            {loading ? <IconLoader2 className="animate-spin" /> : "Sign Up"}
          </button>
        </form>
        <div className="mt-10">
          <p className="text-gray-400">
            Already a User ?{" "}
            <Link className="text-white" to={appRputes.login}>
              Sign in now
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
