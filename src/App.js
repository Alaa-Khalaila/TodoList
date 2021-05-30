import "./App.css";
import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Todo from "./components/Todo";
import Form from "./components/Form";

const App = () => {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("");

  const removeCheckedHandler = (el) => {
    setData(data.filter((item) => item.completed !== true));
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="header__heading">todolist</h1>
      </header>
      <Form todo={todo} setTodo={setTodo} data={data} setData={setData}></Form>
      <Todo data={data} setData={setData}></Todo>
      <section className="add_todo">
        <div className="completed__num">
          {data.filter((item) => item.completed == true).length} of{" "}
          {data.length} Completed
        </div>
        <Button
          onClick={removeCheckedHandler}
          extraClass="btn--small"
          btnText="Remove checked X"
        ></Button>
      </section>
    </div>
  );
};

export default App;
