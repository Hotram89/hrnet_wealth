import { useNavigate } from "react-router-dom";
import "./Modal.css";
import React, { useState } from "react";

export default function BasicModal(isOpen) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  function handleShow() {
    setShow(false);
    navigate("/usersList");
  }
  return (
    <div id={isOpen ? "modal" : "modal-hidden"}>
      {show ? (
        <div className="modal-content">
          <span className="close" onClick={handleShow}>
            &times;
          </span>
          <p>Employee Created!</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
