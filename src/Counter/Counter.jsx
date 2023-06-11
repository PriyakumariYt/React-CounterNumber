import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Tooltip from "@mui/material/Tooltip";
const Counter = () => {
  const [number, updateNumber] = useState(0);
  const incNum = () => {
    updateNumber(number + 1);
  };
  const decNum = () => {
    if (number > 0) {
      updateNumber(number - 1);
    } else {
      alert("That limit only 0");
      updateNumber(0);
    }
  };
  return (
    <>
      <div className="container1">
        <div className="box1">
          <h1>{number}</h1>
          <div className="btn-container">
            <Tooltip title="Add">
              <button onClick={incNum}>
                <AddIcon />
              </button>
            </Tooltip>
            <Tooltip title="Delete">
              <button onClick={decNum}>
                <DeleteForeverIcon />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};
export default Counter;
