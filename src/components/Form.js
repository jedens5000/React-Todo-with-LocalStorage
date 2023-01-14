import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
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
    // setTodos([
    //   ...todos,
    //   { text: inputText, completed: false, id: Math.random() * 1000 },
    // ]);
    localStorage.setItem("localTasks", JSON.stringify([...todos, newTodo]));
    setInputText("");
    // console.log(setInputText);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        placeholder="enter task"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      {/* DROPOWN FILTER HERE  */}
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
