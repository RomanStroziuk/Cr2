import React from "react";

const UserCard = ({ user, onDelete }) => {
  return (
    <div style={cardStyle}>
      <h3>{user.firstName} {user.lastName}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => onDelete(user.id)} style={buttonStyle}>
        Delete
      </button>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const buttonStyle = {
  backgroundColor: "#ff4d4d",
  color: "white",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
};

export default UserCard;
