import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import './index.css'
const Circularprogress = (props) => {
  return (
    <div className="circular_progress" >
      <CircularProgressbar
        value={props.value}
        text={props.text}
        styles={buildStyles({
          pathColor: "rgba(249, 166, 52)",
          textColor: "rgba(249, 166, 52)",
        })}
        strokeWidth={5}
      />
    </div>
  );
};

export default Circularprogress;
