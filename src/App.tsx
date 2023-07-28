import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import { Login } from "./pages/Account/Login";
import { Admin } from "./pages/Admin/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<PrivateRoute />}>
                        <Route path="/" element={<Admin />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
