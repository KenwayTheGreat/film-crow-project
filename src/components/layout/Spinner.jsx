import React from "react";
import SpinnerAn from "./spinner.gif";

function Spinner() {
  return (
    <div>
      <img
        src={SpinnerAn}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
