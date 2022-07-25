import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Layout />
      <GlobalStyles />
    </>
  );
}

export default App;
  