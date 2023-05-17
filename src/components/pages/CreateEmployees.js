import React from "react";
import "./CreateEmployee.css";
import Form from "../utils/Form.js";

const CreateEmployee = () => {
  return (
    <main>
      <aside></aside>
      <div className="registerForm">
        <section className="user-add">
          {/* <h1>Join our team !</h1> */}
          <h2>Create a new employee</h2>
          <Form />
        </section>
      </div>
    </main>
  );
};

export default CreateEmployee;
