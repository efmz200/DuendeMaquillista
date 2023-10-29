import React from "react";

function Modal({ isVisible, onClose, children }) {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id === "wrapper") onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="w-[600px]  rounded-lg  flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={()=> onClose()}>X</button>
                <div className="bg-medGreen items-center rounded-lg p-2">{children} </div>
            </div>
            

        </div>
    )
}

export default Modal;
