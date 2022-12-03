import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./base/globalStyles";
import { AppRoutes } from "./constants";
import {
  Home,
  Crypto,
  Forex,
  Stocks,
  Futures,
  AdvancedCharts,
  AdvancedChartsDetails,
  LearnMore,
} from "./pages";
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
        <Route path={AppRoutes.crypto} element={<Crypto />} />
        <Route path={AppRoutes.forex} element={<Forex />} />
        <Route path={AppRoutes.stocks} element={<Stocks />} />
        <Route path={AppRoutes.futures} element={<Futures />} />
        <Route
          path={AppRoutes.advanced.advanced}
          element={<AdvancedCharts />}
        />
        <Route
          path={`${AppRoutes.advanced.advanced}/:slug`}
          element={<AdvancedChartsDetails />}
        />
        <Route
          path={`${AppRoutes.advanced.advanced}/learn-more/:slug`}
          element={<LearnMore />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
