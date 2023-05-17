import React from "react";
import BasicTable from "../utils/Table";
import "./EmployeesList.css";
import { useSelector } from "react-redux";

const EmployeesList = () => {
  let newUsers = useSelector((state) => state.users);
  return (
    <main className="list">
      <h1 className="list-title">Current Employees</h1>
      <div className="container-cards">
        <BasicTable users={newUsers} />
      </div>
    </main>
  );
};

export default EmployeesList;
