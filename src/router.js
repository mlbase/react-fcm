import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Login from "./user/login";
import Register from "./user/register";

const CustomRouter = createBrowserRouter([
  {
    path: "/login",
    element: <div>로그인</div>,
    Component: Login
  },
  {
    path: "/register",
    element: <div>회원가입</div>,
    Component: Register
  }

]);

export default CustomRouter;