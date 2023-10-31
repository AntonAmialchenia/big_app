import { FC } from "react";
import { useTheme } from "./providers/ThemePrivider";
import { NavBar } from "widgets/NavBar";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";
import { classNames } from "shared";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <AppRouter />
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
};
