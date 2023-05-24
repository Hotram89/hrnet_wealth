import React from "react";
import BasicTable from "../utils/Table";
import "./EmployeesList.css";
import { useSelector } from "react-redux";
import Dropdown from "../utils/Dropdown";

const EmployeesList = () => {
  //   const couleurs = {
  //     couleurs: ["Bleu", "Vert", "Rouge", "Jaune"],
  //   };

  //   function selectField(value) {
  //     return value;
  //   }
  let newUsers = useSelector((state) => state.users);
  return (
    <main className="list">
      <h1 className="list-title">Current Employees</h1>
      <div className="container-cards">
        <BasicTable users={newUsers} />
      </div>
      {/* <Dropdown
        className="test"
        options={couleurs.couleurs}
        select={selectField}
        placeholder="Select"
      ></Dropdown> */}
    </main>
  );
};

export default EmployeesList;
