import React from "react";

const ErrorMessage = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 shadow-md rounded">
        <p className="text-red-500">{message}</p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-2 py-1 rounded mt-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
