import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/hrnet"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        Create Employee
      </NavLink>
      <NavLink
        to="/usersList"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        View Current Employees
      </NavLink>
    </nav>
  );
};

export default Navigation;
