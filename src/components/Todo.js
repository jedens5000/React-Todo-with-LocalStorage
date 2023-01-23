import React from "react";

const Todo = ({ text, todo, todos, setTodos, data, setData }) => {
  const deleteHandler = () => {
    const deleted = todos.filter((item) => item.id !== todo.id);
    setTodos(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  };
  const completeHandler = () => {
    const completed = todos.map((item) => {
      if (item.id === todo.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodos(completed);
    localStorage.setItem("localTasks", JSON.stringify(completed));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
