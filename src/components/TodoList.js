import React, { useEffect } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  //////////////API FETCH//////////////////////////
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users/1/todos?_limit=5")
  //     .then((response) => response.json()) //<--this converts to JSON
  //     .then((todos) => {
  //       setTodos(todos);
  //     });
  // }, []);
  /////////////END FETCH/////////////////////////
  //////////////LocalStorage FETCH//////////////////////////
  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      // setTodos(JSON.parse(localStorage.getItem("localTasks")));
      setTodos(storedList);
    }
    // fetch("https://jsonplaceholder.typicode.com/users/1/todos?_limit=5")
    //   .then((response) => response.json()) //<--this converts to JSON
    //   .then((todos) => {
    //     setTodos(todos);
    //   });
  }, []);
  /////////////END FETCH/////////////////////////

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            text={todo.text ? todo.text : todo.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
