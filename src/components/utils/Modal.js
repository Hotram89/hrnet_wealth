import React, { useState } from "react";

import "./Modal.css";

export default function BasicModal(isOpen) {
  console.log(isOpen);

  return (
    <div id={isOpen ? "modal" : "modal-hidden"}>
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>Employee Created!</p>
      </div>
    </div>
  );
}
