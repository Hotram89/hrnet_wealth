import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};

export default Router;
