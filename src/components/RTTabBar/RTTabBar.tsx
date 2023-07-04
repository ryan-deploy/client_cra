import { TabBar } from "antd-mobile";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AppOutline, UserOutline } from "antd-mobile-icons";
import Home from "../../pages/home/home";
import "./RTTabBar.css";
import User from "../../pages/user/user";
import Login from "../../pages/login/login";
import RequireAuth from "../../router/RequireAuth";

function RTTabBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/user",
      title: "我的",
      icon: <UserOutline />,
    },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>

      <TabBar
        className="rt-tab-bar"
        activeKey={pathname}
        onChange={(value) => setRouteActive(value)}
        safeArea
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
}

export default RTTabBar;
