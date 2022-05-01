import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const Todo = ({ todo, todos, setTodos, activeTodos, setActiveTodos }) => {
  const deleteHandler = (e) => {
    var filteredTodos = todos.filter((td) => {
      if (td.id != e.target.id) {
        return td;
      }
    });
    var filteredActives = activeTodos.filter((td) => {
      if (td.id != e.target.id) {
        return td;
      }
    });
    setTodos([...filteredTodos]);
    setActiveTodos([...filteredActives]);
  };
  const isDoneHandler = (e) => {
    let newTodos = todos.map((todo) => {
      if (todo.id == e.target.id) {
        return { ...todo, isDone: e.target.checked };
      } else {
        return todo;
      }
    });
    let newActiveTodos = activeTodos.map((todo) => {
      if (todo.id == e.target.id) {
        return { ...todo, isDone: e.target.checked };
      } else {
        return todo;
      }
    });
    setTodos([...newTodos]);
    setActiveTodos([...newActiveTodos]);
  };
  console.log(todos);
  console.log(activeTodos);
  let item;
  if (todo.isDone) {
    item = (
      <li className="done">
        {todo.text}
      </li>
    );
  } else {
    item = (
      <li>
        {todo.text}
      </li>
    );
  }
  let checkbox;
  if (todo.isDone) {
    checkbox = (
      <input
        type="checkbox"
        onChange={isDoneHandler}
        id={todo.id}
        checked="true"
      />
    );
  } else {
    checkbox = <input type="checkbox" onChange={isDoneHandler} id={todo.id} />;
  }
  return (
    <div className="category-group" key={todo.id}>
      {item}
      <div className="todo-buttons-container">
        {checkbox}
        <div id={todo.id} onClick={deleteHandler}>
          <button className="delete-btn main" id={todo.id}>
            <i id={todo.id} className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
