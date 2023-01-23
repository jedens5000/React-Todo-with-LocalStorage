import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      text: inputText,
      completed: false,
      id: Math.random() * 1000,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("localTasks", JSON.stringify([...todos, newTodo]));
    setInputText("");
  };
  // console.log(setInputText);
  // statusHandler handles the filter change
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          placeholder="enter task"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </form>

      {/* DROPOWN FILTER HERE   */}
      {/* <form> */}
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All Tasks</option>
          <option value="completed">Finished Tasks</option>
          <option value="uncompleted">Pending Tasks</option>
        </select>
      </div>
      {/* </form> */}
    </>
  );
};

export default Form;
