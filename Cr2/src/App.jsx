import React from "react";
import Container from "./components/Container"; 

function App() {
  return (
    <div style={appStyle}>
      <h2>Юзери з апішки :</h2>
      <Container />
    </div>
  );
}

const appStyle = {
  fontFamily: "Arial, sans-serif",
  padding: "20px",
};

export default App;
