import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={"btn " + props.extraClass}
      type={props.type}
    >
      {props.btnText}
    </button>
  );
};

export default Button;
