import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./css/Main.css";
import "./css/Table.css";
import "./css/Search.css";
import "./css/Input.css";
import "./css/Detail.css";
import "./App.css";
import Login from "./main/Login";
import bugs from "./images/bug.png";
import Dash from "./main/Dash";
import Join from "./main/Join";

function App() {
  return (
    <Router>
      <div className="header">
        <div>
          <img src={bugs} width="30px" height="30px" alt="bugs" />
          <Link to="/">Mem</Link>
        </div>
        <nav className="nav">
          <Link to="/login" className="login_btn">
            Log in
          </Link>
          <Link to="/join" className="signup_btn">
            Sign up
          </Link>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" element={<Dash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
