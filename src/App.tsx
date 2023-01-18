import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";

const Container = styled.div`
  margin: 22px;
  padding: 26px;
  background-color: #f9f9f9;
  border-radius: 4px;
`;

function App() {
  return (
    <>
      <Container>
        <Dashboard />
      </Container>
    </>
  );
}

export default App;
