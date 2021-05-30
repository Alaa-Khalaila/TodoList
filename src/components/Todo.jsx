import React, { useEffect } from "react";
import deleteIcon from "../images/delete.svg";
import editIcon from "../images/edit.svg";

const Todo = (props) => {
  const checkBoxHandler = (el) => {
    props.setData(
      props.data.map((item) => {
        if (item.id === el.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteHandler = (el) => {
    props.setData(props.data.filter((item) => item.id !== el.id));
  };

  return (
    <div>
      {props.data.map((el) => (
        <div className="todo">
          <div>
            <input type="checkbox" onClick={() => checkBoxHandler(el)}></input>
            <span
              className={`todo__content ${el.completed ? "completed" : ""} `}
            >
              {el.text}
            </span>
          </div>

          <img
            className="icon"
            onClick={() => deleteHandler(el)}
            src={deleteIcon}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Todo;
