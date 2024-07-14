import { useRoutes } from "react-router-dom";
import { Login } from "../pages";
import SignUp from "../pages/signup/sign-up";
import { appRputes } from "./routeConst";

export const Router = () => {
  const element = useRoutes([
    {
      path: appRputes.base,
      children: [
        { path: appRputes.login, element: <Login /> },
        { path: appRputes.signUp, element: <SignUp /> },
      ],
    },
  ]);
  return element;
};
