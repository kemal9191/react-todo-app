import React from "react";
import Category from "./Category";

const CategoryList = ({
  setCategories,
  categories,
  activeCategory,
  setActiveCategory,
  setActiveTodos,
  todos,
  setTodos,
  activeTodos
}) => {
  return (
    <ul>
      {categories.map((category) => (
        <Category
          setTodos={setTodos}
          activeTodos={activeTodos}
          todos={todos}
          activeCategory={activeCategory}
          setActiveTodos={setActiveTodos}
          category={category}
          categories={categories}
          setCategories={setCategories}
          setActiveCategory={setActiveCategory}
        />
      ))}
    </ul>
  );
};

export default CategoryList;
