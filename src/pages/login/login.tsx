import { IconLoader2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Header } from "../../components";
import { appRputes } from "../../routes/routeConst";
import useLogin from "./useLogin";

const Login = () => {
  const { email, setEmail, password, setPassword, handleSigninClick, loading } =
    useLogin();
  return (
    <main className="bg-black relative h-screen z-0">
      <div className="absolute bg-cover h-screen overflow-hidden -z-10 opacity-50">
        <img src="/movie-bg.jpeg" />
      </div>
      <Header />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/6 py-5 px-20 bg-black/60">
        <h1 className="text-2xl mb-5 text-white ">Sign In</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
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
            onClick={handleSigninClick}
            className="bg-primary text-white py-2 rounded-sm flex justify-center items-center"
          >
            {loading ? <IconLoader2 className="animate-spin" /> : "Sign In"}
          </button>
        </form>
        <div className="mt-10">
          <p className="text-gray-400">
            New to Netflix ?{" "}
            <Link className="text-white" to={appRputes.signUp}>
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
