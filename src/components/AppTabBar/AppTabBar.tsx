import { TabBar } from "antd-mobile";
import { useLocation, useNavigate } from "react-router-dom";
import { AppOutline, UserOutline } from "antd-mobile-icons";

import "./AppTabBar.css";

function AppTabBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/",
      icon: <AppOutline />,
    },
    {
      key: "/user",
      icon: <UserOutline />,
    },
  ];

  return (
    <TabBar
      className="app-tab-bar"
      activeKey={pathname}
      onChange={(value) => setRouteActive(value)}
      safeArea
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} />
      ))}
    </TabBar>
  );
}

export default AppTabBar;
