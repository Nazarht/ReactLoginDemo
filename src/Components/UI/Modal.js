import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div className="background-modal">
      <div className="main-modal">
        <div>
          <span>Invalid input</span>
        </div>
        <p>{props.reason}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
