import React from "react";

const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      style={{
        border: props.border,
        padding: props.padding,
        borerRadius: props.rounded,
        backgroundColor: props.bg,
        width: props.width,
      }}
      className={props.className}
    />
  );
};

export default Input;
