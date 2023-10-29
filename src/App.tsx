import { FC, Suspense, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import "./styles/index.scss";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { useTheme } from "./hooks/useTheme";
import { classNames } from "./helpers/classNames/classNames";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
