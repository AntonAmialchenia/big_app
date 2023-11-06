import { FC, Suspense } from "react";
import { useTheme } from "./providers/ThemePrivider";
import { NavBar } from "widgets/NavBar";
import { AppRouter } from "./providers/router";
import { classNames } from "shared";
import { Sidebar } from "widgets/Sidebar";

import "./styles/index.scss";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />

        <div className="content-page">
          <Sidebar />
          <div className="wrapper-page">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};
