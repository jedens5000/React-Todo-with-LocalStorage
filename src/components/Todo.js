import React from "react";

const Todo = ({ text, todo, todos, setTodos, data, setData }) => {
  // Event Handler
  const deleteHandler = () => {
    const deleted = todos.filter((el) => el.id !== todo.id);
    setTodos(deleted);
    // setTodos(todos.filter((el) => el.id !== todo.id));
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
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
