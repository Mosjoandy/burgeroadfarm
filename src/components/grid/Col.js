import React from "react";

// <Col size="md-6"> </Col>
export const Col = ({ size, children }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>
);
