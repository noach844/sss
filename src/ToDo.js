import React from 'react'

export default function ToDo({todo, toggle}) {

    function todoClick(){
        toggle(todo.id)
    }

    return (
        <div>
            <label>                
                <input type="checkbox" checked={todo.complete} onChange={todoClick}/>
                {todo.name}
            </label>
        </div>
    )
}
