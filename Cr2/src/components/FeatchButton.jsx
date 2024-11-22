import React from "react";

const FetchButton = ({ onClick, loading }) => {
  return (
    <button onClick={onClick} style={buttonStyle} disabled={loading}>
      {loading ? "Завантаження..." : "Завантажити"}
    </button>
  );
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  borderRadius: "5px",
  marginBottom: "20px",
};

export default FetchButton;
