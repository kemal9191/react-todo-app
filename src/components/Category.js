import React from "react";

const Category = ({
  setCategories,
  category,
  categories,
  todos,
  activeCategory,
  setActiveCategory,
  setActiveTodos,
  setTodos,
  activeTodos
}) => {
  const deleteHandler = (e) => {
    var filteredTodos = todos.filter((todo)=>{
      if(todo.category!==e.target.id){
        return todo
      }
    })
    var filteredActives = activeTodos.filter((atd)=>{
      if(atd.category!==e.target.id){
        return atd
      }
    })
    var filteredCategories = categories.filter((category) => {
      if(category.text===activeCategory){
        setActiveCategory("");
      }
      if (category.text !== e.target.id) {
        return category;
      }
    });
    setTodos([...filteredTodos])
    setActiveTodos([...filteredActives])
    setCategories([...filteredCategories]);
    console.log(todos)
  };
  
let className;
    

  return (
    <div className="category-group" key={category.id}>
      
      <li
      {...activeCategory==category.text ? className="category-item colored":className="category-item"}
      className={className}  
      name={category.text}
        id={category.id}
        onClick={()=>{
          let filteredTodos = todos.filter((todo)=>{
            if(todo.category==category.text){
              return todo
            }
          })
          setActiveTodos([...filteredTodos]);
          console.log(filteredTodos)
          setActiveCategory(`${category.text}`);
        }}
      >
        {category.text}
      </li>
      <div id={category.text} onClick={deleteHandler}>
        <button className="delete-btn" id={category.text}>
          <i id={category.text} className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default Category;
