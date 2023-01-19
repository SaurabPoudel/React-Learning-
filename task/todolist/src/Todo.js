import React, { useState } from 'react'

export default function Todo({todo,toggleTodo}) {
    const [isCompleted, setIsCompleted] = useState(localStorage.getItem(todo.id) === 'true');

    function handleTodoClick(){
        toggleTodo(todo.id);
        setIsCompleted(!isCompleted);
    }
  return (
    <div>
        <label>
        <input type="checkbox" checked={isCompleted} onClick={handleTodoClick}/>
        {todo.name}
        </label>
    </div>
  )
}