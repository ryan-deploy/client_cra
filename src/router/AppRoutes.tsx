import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import User from "../pages/user/user";
import RequireAuth from "./RequireAuth";
import LayoutTabBar from "../components/Layouts/LayoutTabBar";
import { AppOutline } from "antd-mobile-icons";

const routes = [
  {
    path: "/",
    element: <Home />,
    title: <AppOutline fontSize={30} />,
    requireAuth: false,
    layout: true,
  },
  {
    path: "/user",
    element: <User />,
    title: "User",
    requireAuth: true,
    layout: true,
  },
  {
    path: "/login",
    element: <Login />,
    title: "Login",
    requireAuth: false,
    layout: false,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.requireAuth ? (
              <RequireAuth>
                {route.layout ? (
                  <LayoutTabBar title={route.title}>
                    {route.element}
                  </LayoutTabBar>
                ) : (
                  route.element
                )}
              </RequireAuth>
            ) : route.layout ? (
              <LayoutTabBar title={route.title}>{route.element}</LayoutTabBar>
            ) : (
              route.element
            )
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
