import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import React from "react";
import { Login } from "./auth/login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api/firebase";
import { useEffect, useState } from "react";
import { Admin } from "./components/admin";

function App() {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={isAuth ? <Admin /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
