import React from "react";
import Button from "./Button";
import Input from "./Input";
import uniqid from "uniqid";

const Form = ({ todo, setTodo, data, setData }) => {
  const addHandler = (e) => {
    e.preventDefault();
    setData([...data, { text: todo, completed: false, id: uniqid() }]);
    setTodo("");
  };

  const inputTextHandler = (e) => {
    setTodo(e.target.value);
  };
  return (
    <form className="add_todo">
      <Input
        value={todo}
        onChange={inputTextHandler}
        placeholder="Add Todo"
      ></Input>
      <Button
        extraClass="btn--larg"
        btnText="+"
        onClick={addHandler}
        type="submit"
      ></Button>
    </form>
  );
};

export default Form;
