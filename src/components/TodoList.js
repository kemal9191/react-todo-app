import React from "react";
import Todo from "./Todo";
const TodoList = ({ activeCategory,activeTodos, todos, setTodos, setActiveTodos }) => {
  return (
    <ul className="todo-list">
      {activeTodos.map((todo) => (
        <Todo todo={todo} todos={todos} setTodos={setTodos} setActiveTodos={setActiveTodos} activeTodos={activeTodos} />
      ))}
    </ul>
  );
};

export default TodoList;
