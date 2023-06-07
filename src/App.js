import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "./user/register";
import Login from "./user/login";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

export const apiUrl = process.env.REACT_APP_API_URL;


const App = () => {
  const [route, setRoute] = useState("/");

  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.pathname;

    // Set the route to the current URL
    setRoute(currentUrl);
  }, []);

  return (
    <div id="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <a href="/login">Login</a>
      </div>
      <div>
        <a href="/register">Register</a>
      </div>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(<App />, document.getElementById("root"));

export default App;


