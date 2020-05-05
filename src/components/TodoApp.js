import React from "react"
import Todoitem from "./Todoitem"
import Tododata from "./Tododata"
import newTodoItem from "./newTodoItem"

class TodoApp extends React.Component{
    state ={
        todos: Tododata,
        newTodoItem: ""
    }

    handleChange = (id) => {
        this.setState(prevState => {
            const newTodo = prevState.todos.map((todo) =>{
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return{
                todos: newTodo
            }

        })
    }
    handleSubmit =(event) => {
        event.preventDefault()
        const {name, value} = event.target
        if (name ==="newTodoItem"){
            this.setState({[name] : value})
        }
        else {
            const lenght = this.state.todos.length - 1
            let lastId = this.state.todos[lenght].id + 1
            const text = this.state.newTodoItem
            const newItem = {id: lastId, completed: false, text: text }
            const newList = this.state.todos
            console.log(newItem)
            newList.push(newItem)
            this.setState({
                todos: newList,
                newTodoItem: ""
            })

        }


    }

    handleClick = (id) => {
        this.setState(prevState => {
            let num
            prevState.todos.map((todo, index) =>{
                if(todo.id === id){
                     num = index
                }
            
            })
            const newTodo = prevState.todos
            newTodo.splice(num, 1)
            return{
                todos: newTodo
            }

        })
    }

    render(){
        const todoItems = this.state.todos.map(item =>
            <Todoitem 
                key={item.id} 
                item={item} 
                handleChange={this.handleChange}
                handleClick={this.handleClick}
            />)
        return(
            <div className ="todo-list">
                <form className= "todo-form" onSubmit={this.handleSubmit}>
                <input id="textbox"
                    type="text"
                    value ={this.state.newTodoItem}
                    name = "newTodoItem"
                    placeholder="Enter New Task"
                    onChange={this.handleSubmit}
                />
                <br />
                {this.state.newTodoItem === "" ? 
                    null 
                    :
                    <button name="button"> ADD </button>
                }
                </form>
                
                {todoItems}
            </div>
        )
    }

}

export default TodoApp