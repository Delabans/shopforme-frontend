import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import Login from "./components/Login/index";
// import Signup from "./components/signup/index";
import Dashboard from "./components/Dashboard";
import Signin from "./backend/auth/signin/signin";
import Signup from "./backend/auth/signup/index";
import Main from "./components/main/main";
import List from "./list/List";
import Rating from "./rating/rating";
import Riderprofile from "./components/Riderprofile";
import ProtectedRoute from "./backend/routes/ProtectedRoute";
// import Sidebar from "./components/Sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<App />} />
      </Route>
      <Route path="login" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="main" element={<Main />} />
      <Route path="list" element={<List />} />
      <Route path="rating" element={<Rating />} />
      <Route path="riderprofile" element={<Riderprofile />} />
      <Route path="dashboard" element={<Dashboard />} />
      {/* <Route path="sidebar" element={<Sidebar />} /> */}
    </Routes>
  </BrowserRouter>
);
