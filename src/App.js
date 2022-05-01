import { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Media from "react-media";
import { useEffect } from "react";
import useLocalStorage from "./components/useLocalStorage";

function App() {
  const [categories, setCategories] = useLocalStorage("categories",[]);
  const [categoryInput, setCategoryInput] = useState("");
  const [todoInput, setTodoInput] = useState();
  const [activeCategory, setActiveCategory] = useLocalStorage("activeCategory","");
  const [todos, setTodos] = useLocalStorage("todos",[])
  const [activeTodos, setActiveTodos] = useLocalStorage("activeTodos",[])
  
  return (
    <div>
      <Header todos={todos} setActiveTodos={setActiveTodos} activeTodos={activeTodos}/>
      <Media query="(min-width:1120px)">
{matches=>{return matches ? <div className="section-container">
        <Sidebar
          todos={todos}
          categoryInput={categoryInput}
          setCategoryInput={setCategoryInput}
          setCategories={setCategories}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setActiveTodos={setActiveTodos}
          setTodos={setTodos}
          activeTodos={activeTodos}
        />
        <div className="todo-section-container">
        <TodoForm activeTodos={activeTodos} setActiveTodos={setActiveTodos} todoInput={todoInput} setTodoInput={setTodoInput}  setTodos={setTodos} todos={todos} activeCategory={activeCategory} />
        <TodoList activeCategory={activeCategory} activeTodos={activeTodos} todos={todos} setTodos={setTodos} setActiveTodos={setActiveTodos} />

        </div>
      </div> : <div className="sm-container">
        <Sidebar
          todos={todos}
          categoryInput={categoryInput}
          setCategoryInput={setCategoryInput}
          setCategories={setCategories}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setActiveTodos={setActiveTodos}
          setTodos={setTodos}
          activeTodos={activeTodos}
        />
        <div className="todo-section-container">
        <TodoForm activeTodos={activeTodos} setActiveTodos={setActiveTodos} todoInput={todoInput} setTodoInput={setTodoInput}  setTodos={setTodos} todos={todos} activeCategory={activeCategory} />
        <TodoList activeTodos={activeTodos} todos={todos} setTodos={setTodos} setActiveTodos={setActiveTodos} />

        </div>
      </div>}}
      </Media>
      
    </div>
  );
}

export default App;
