import React, { useState } from 'react';
import { uid } from "react-uid"
import './App.css'
import Todo from './Todo.js';

function App() {
   const [value, setvalue] = useState("")
  const [todos, settodos] = useState([]) 

  const addtodo = input =>{
    if(input !==""){
      settodos([...todos, { title: input, completed: false, id: uid(input) }])
    }
  }
  const handleSubmit = e => {
      e.preventDefault()
      addtodo(value)
      setvalue("")
  }

  return (
    <div className="App">
        <div className="subApp">
        <h1>TODO App</h1>
        
          <form onSubmit={handleSubmit}>
            <input type="text"  className="addto" value={value} onChange={ e => setvalue(e.target.value)}/>
            <input type="submit" className="clicktodo" />
          </form>
        <div className="todoList"> 
          {
            todos.map((todo) =>  <Todo key={todo.id} newer={todo.id} todo={todo} todos={todos} settodos={settodos}/>)
          } 
        </div>
          <button onClick={() => settodos([])}>clear</button>
        </div>
    </div>
  );
}

export default App;
