import React from "react"

function newTodoItem(props){

    return(
    
        <form onSubmit={props.handleSubmit}>
        <input 
            type="text"
            value ={props.newTodoItem}
            placeholder="Enter New Task"
            onChange={() => props.handleSubmit}
        />
        
        </form>
    )
}

export default newTodoItem