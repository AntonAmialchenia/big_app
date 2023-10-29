import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import "./index.scss";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className="app">
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
