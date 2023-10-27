import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
