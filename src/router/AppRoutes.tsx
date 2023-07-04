import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import User from "../pages/user/user";
import RequireAuth from "./RequireAuth";
import LayoutTabBar from "../components/Layouts/LayoutTabBar";
import { AppOutline } from "antd-mobile-icons";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutTabBar title={<AppOutline fontSize={30} />}>
            <Home />
          </LayoutTabBar>
        }
      />
      <Route
        path="/user"
        element={
          <RequireAuth>
            <LayoutTabBar title="User">
              <User />
            </LayoutTabBar>
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
