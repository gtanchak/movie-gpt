import { useRoutes } from "react-router-dom";
import { Browse, Login, SignUp } from "../pages";
import { appRputes } from "./routeConst";

export const Router = () => {
  const element = useRoutes([
    {
      path: appRputes.base,
      children: [
        { path: appRputes.login, element: <Login /> },
        { path: appRputes.signUp, element: <SignUp /> },
        { path: appRputes.browse, element: <Browse /> },
      ],
    },
  ]);
  return element;
};
