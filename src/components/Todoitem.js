import React from "react"

function Todoitem(props){
    const completedSytle = {
        color: "red",
        fontStyle: "italic",
        textDecoration: "line-through"
    }
    return(
        <div className="todo-item">
        <input
        type ="checkbox"
        checked = {props.item.completed}
        onChange ={() => props.handleChange(props.item.id)}
        />
        <p style={props.item.completed ? completedSytle : null}>
            {props.item.text} 
        </p>
        <button className="delete" onClick={() => props.handleClick(props.item.id)}>X</button>
        </div>
    )
}

export default Todoitem