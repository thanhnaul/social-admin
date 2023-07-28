import React from "react";
import { Route, RouteProps, Navigate, Outlet } from "react-router-dom";
import { Login } from "../pages/Account/Login";

export const PrivateRoute = () => {
    const isLogin = true;
    return isLogin ? <Outlet /> : <Navigate to="/login" />;
};
