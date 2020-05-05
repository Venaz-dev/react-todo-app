import React from "react"
import "./style.css"
import "./App.css"
import Header from "./components/Header"
import TodoApp from "./components/TodoApp"
function App(){
  return(
    <div>
      <Header />
      <TodoApp className="todo-list" />
    </div>
  )
}

export default App