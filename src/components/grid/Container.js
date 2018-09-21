import React from "react";

// <Container fluid ></Container>
export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
