import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./base/globalStyles";
import { AppRoutes } from "./constants";
import { Home } from "./pages";
import { Navbar, Footer, SideBar } from "./components";
import useAnimate from "./hooks/useAnimate";

function App() {
  useAnimate();

  const { pathname } = useLocation();

  return (
    <>
      <GlobalStyle />
      {pathname === "/" ? "" : <Navbar />}
      <SideBar />
      <Routes>
        <Route path={AppRoutes.home} element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
