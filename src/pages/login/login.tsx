import { Link } from "react-router-dom";
import { Button, Header } from "../../components";
import { appRputes } from "../../routes/routeConst";

const Login = () => {
  return (
    <main className="bg-black relative h-screen z-0">
      <div className="absolute bg-cover h-screen overflow-hidden -z-10 opacity-50">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg" />
      </div>
      <Header />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/6 py-5 px-20 bg-black/60">
        <h1 className="text-2xl mb-5 text-white ">Sign In</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-3 py-3.5 bg-transparent border border-gray-500 rounded-sm outline-none text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-3 py-3.5 bg-transparent border border-gray-500 rounded-sm outline-none text-white"
          />
          <Button className="bg-primary text-white py-2 rounded-sm">
            Sign In
          </Button>
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
