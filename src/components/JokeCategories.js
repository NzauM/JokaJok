import React from "react";

function JokeCategories({categories}){

    function clickCategory(category){
        console.log(category)
      }

    const category = categories.map((category, index)=>{
        return(
            <button onClick={clickCategory(category)} className="btn btn-primary badge d-block mb-2" key={index} >
                {category}
                </button>
        )
    })

   
   
    return(
        <div>
            <ul>
                {category}
            </ul>
        </div>
    )
}

export default JokeCategories;