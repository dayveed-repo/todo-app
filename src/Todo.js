import React from 'react'
import './Todo.css'
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo({ todo, newer, todos, settodos }) {

    const handlecompleted = () =>{
        settodos(todos.map(item => {
            if(item.id === newer){
                return { ...item, completed: !item.completed }
            }{
                return item
            }
        }))
    }

    const handleDelete = () =>{
        settodos(todos.filter( item => item.id != newer))
    }
    return (
        <div className="Todo">
            <h2 className={`${todo.completed ? "completed" : "" }`}>{todo.title}</h2>
            <div>
            <DoneIcon onClick={handlecompleted} />
            <DeleteIcon onClick={handleDelete} />
            </div>
        </div>
    )
}

export default Todo
