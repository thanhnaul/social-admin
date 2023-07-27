import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import { Login } from "./pages/Account/Login";
import { Admin } from "./pages/Admin/Admin";

function App() {
    return (
        <div className="App">
            <Admin />
        </div>
    );
}

export default App;
