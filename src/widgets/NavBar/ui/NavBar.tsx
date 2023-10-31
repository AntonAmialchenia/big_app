import { FC } from "react";

import cls from "./NavBar.module.scss";
import { AppLink, classNames } from "shared";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};
