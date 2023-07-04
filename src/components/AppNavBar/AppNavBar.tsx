import { NavBar, NavBarProps } from "antd-mobile";
import { FC } from "react";

import "./AppNavBar.css";

const AppNavBar: FC<NavBarProps> = (params) => {
  const { children } = params;
  return (
    <div className="app-nav-bar">
      <NavBar {...params}>{children}</NavBar>
    </div>
  );
};

export default AppNavBar;
