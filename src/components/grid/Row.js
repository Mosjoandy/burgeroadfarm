import React from "react";

// <Row></Row>
export const Row = ({ fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
