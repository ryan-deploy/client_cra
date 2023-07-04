import { ReactNode } from "react";
import AppNavBar from "../AppNavBar/AppNavBar";

interface LayoutTabBarProps {
  children: ReactNode;
  title: String | ReactNode;
}

const LayoutTabBar = ({ children, title }: LayoutTabBarProps) => {
  return (
    <div className="tab-bar-page">
      <AppNavBar back={null}>{title}</AppNavBar>
      {children}
    </div>
  );
};

export default LayoutTabBar;
