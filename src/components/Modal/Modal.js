import React from "react";
import "./Modal.css"

function Modal({ onClose }){

    return (
        <div className="modal-container">
            <div className="modal-body"> 
                <button className="modal-close" onClick={onClose}>x</button>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>
    )
}

export default Modal;

