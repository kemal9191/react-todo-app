import React from "react";
import CategoryList from "./CategoryList";
const Sidebar = ({
  categoryInput,
  setCategoryInput,
  categories,
  activeCategory,
  setActiveCategory,
  setCategories,
  todos,
  setTodos,
  activeTodos,
  setActiveTodos
}) => {
  const categoryInputHandler = (e) => {
    setCategoryInput(e.target.value);
  };

  const categoryHandler = (e) => {
    e.preventDefault();
    if(categoryInput){
      let filteredTodos = todos.filter((todo)=>{
        if(todo.category==categoryInput){
          return todo
        }
      })
      setActiveTodos([...filteredTodos]);
    
      let newOne = [...categories, {text: categoryInput, id:Math.random()*100}]
      setCategories(newOne);
      setCategoryInput("");
      setActiveCategory(categoryInput)
    }else{
      alert("Lütfen Bir Kategori Giriniz!")
    }
    
  };

/*   const deleteHandler = (e) => {
    e.preventDefault();
    setCategories([
      categories.filter(category => category.id != e.target.id)
    ])

    console.log(e.target.id);
    categories.map(category=>console.log(category.text))
  } */

  return (
    <div className="sidebar">
      <div className="category-input-container">
        <form>
          <input
            value={categoryInput}
            type="text"
            className="category-input"
            onChange={categoryInputHandler}
          />
          <button type="submit" className="add-btn" onClick={categoryHandler}>
            <i className="fa-solid fa-plus fa-lg"></i>
          </button>
        </form>
      </div>
      <CategoryList setTodos={setTodos}
          activeTodos={activeTodos} activeCategory={activeCategory} todos={todos} categories={categories} setCategories={setCategories} setActiveCategory={setActiveCategory} setActiveTodos={setActiveTodos} />
 {/*      <ul>
        {categories.map((category) => (
          <div>
          <li
            
            className="category-item"
            onClick={() => {
              setActiveCategory(`${category.text}`);
            }}
          >
            {category.text}{category.id}
          </li>
          <button onClick={deleteHandler} id={category.id}><i className="fa-solid fa-trash-can"></i></button>
          </div>
        ))}
      </ul> */}
    </div>
  );
};

export default Sidebar;
