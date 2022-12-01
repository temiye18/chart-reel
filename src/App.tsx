import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./base/globalStyles";
import { AppRoutes } from "./constants";
import { Home } from "./pages";

import useAnimate from "./helpers/useAnimate";

function App() {
  useAnimate();
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={AppRoutes.home} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
