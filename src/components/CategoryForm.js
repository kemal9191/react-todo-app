import React from "react";

const CategoryForm = ({categories, setCategories, categoryInput, setCategoryInput}) =>{
    //Event Handlers
    const inputTextHandler = (e) => {
        e.preventDefault();
        setCategoryInput(e.target.value);
    }

    const inputSubmitHandler = (e) => {
        e.preventDefault();
        setCategories([
            ...categories,
            {text:categoryInput, id:Math.random()*100}
        ]
        );
        setCategoryInput("")
    }


    return(
        <div>
            <form>
                <input value={categoryInput} type="text" onChange={inputTextHandler}/>
                <button onClick={inputSubmitHandler}><i className="fa-solid fa-plus"></i></button>
            </form>
        </div>
    )
}

export default CategoryForm;