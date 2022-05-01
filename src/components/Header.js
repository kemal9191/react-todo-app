import React from "react";


const Header= ({todos, activeTodos, setActiveTodos}) => {
  let oldTodos = activeTodos
  const searchHandler = (e) => {
    var filteredTodos = todos.filter((todo)=>{
      if(todo.text.includes(e.target.value)){
        return todo
      }
      if(e.target.value===""){
        return activeTodos
      }
    })
    
    setActiveTodos([...filteredTodos])

  }
  return (

    <>
    <header className="header">
        <input type="text" className="search-input" onChange={searchHandler}/>
        <i className="fa-solid fa-magnifying-glass fa-lg search-icon"></i>
    </header>
    </>
  )
}

export default Header