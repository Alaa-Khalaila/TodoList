import React from "react";

const Input = (props) => {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      className="input"
      type="text"
      placeholder={props.placeholder}
    />
  );
};

export default Input;
