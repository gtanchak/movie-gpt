import { useRoutes } from "react-router-dom";
import { Login } from "../pages";
import { appRputes } from "./routeConst";

export const Router = () => {
  const element = useRoutes([
    {
      path: appRputes.base,
      children: [{ path: appRputes.login, element: <Login /> }],
    },
  ]);
  return element;
};
