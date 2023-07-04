import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import User from "../pages/user/user";
import RequireAuth from "./RequireAuth";
import LayoutTabBar from "../components/Layouts/LayoutTabBar";
import { AppOutline } from "antd-mobile-icons";

interface IRoute {
  path: string;
  component: React.ReactNode;
  title: React.ReactNode;
  requireAuth: boolean;
  layout: boolean;
}

const routes: IRoute[] = [
  {
    path: "/",
    component: <Home />,
    title: <AppOutline fontSize={30} />,
    requireAuth: false,
    layout: true,
  },
  {
    path: "/user",
    component: <User />,
    title: "User",
    requireAuth: true,
    layout: true,
  },
  {
    path: "/login",
    component: <Login />,
    title: "Login",
    requireAuth: false,
    layout: false,
  },
];

const generateElement = ({
  component,
  title,
  requireAuth,
  layout,
}: IRoute): React.ReactNode | null => {
  let element = component;
  if (layout) {
    element = <LayoutTabBar title={title}>{element}</LayoutTabBar>;
  }
  if (requireAuth) {
    element = <RequireAuth>{element}</RequireAuth>;
  }

  return element;
};

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={generateElement(route)}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
