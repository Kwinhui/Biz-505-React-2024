import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import AOS from "aos";

import Login from "./main/Login";
import bugs from "./images/bug.png";
import Dash from "./main/Dash";
import Join from "./main/Join";

AOS.init();

function App() {
  return (
    <Router>
      <div className="main">
        <div className="header">
          <div>
            <img src={bugs} width="30px" height="30px" alt="bugs" />
            <Link to="/">Home</Link>
          </div>
        </div>
        <nav className="nav">
          <Link to="/login" className="login_btn">
            Log in
          </Link>
          <Link to="/join" className="join">
            Sign up
          </Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Dash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
