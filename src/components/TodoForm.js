import React from "react";

const TodoForm = ({
  todos,
  activeCategory,
  setTodos,
  todoInput,
  setTodoInput,
  activeTodos,
  setActiveTodos,
}) => {
  const todoInputHandler = (e) => {
    e.preventDefault();
    setTodoInput(e.target.value);
  };

  const todoHandler = (e) => {
    let itemId=Math.random()*100
    e.preventDefault();
    if (!activeCategory) {
      alert("Lütfen Bir Kategori Seçiniz!");
    } else if ((todoInput !== undefined)) {
      setTodos([
        ...todos,

        { text: `${todoInput}`, category: `${activeCategory}`, id:itemId, isDone:false },
      ]);
      setTodoInput("");
      setActiveTodos([
        ...activeTodos,
        { text: `${todoInput}`, category: `${activeCategory}`, id:itemId, isDone:false},
      ]);
    } else {
      alert("Lütfen Bir İş Ekleyin");
    }
  };
  return (
    <form className="todo-form">
      <input
        value={todoInput}
        className="todo-input"
        type="text"
        onChange={todoInputHandler}
      />
      <button className="add-btn todo" onClick={todoHandler}>
        <i className="fa-solid fa-plus fa-lg"></i>
      </button>
    </form>
  );
};

export default TodoForm;
