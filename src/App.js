import React, {useState, useRef, useEffect} from 'react'
import ToDoList from './ToDoList'

export default function App() {
  const [todos, setTodos] = useState([])
  const  ToDoName = useRef()

  const LOCAL_STORAGE = 'todoApp.todos'

  useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE))
    if(stored) setTodos(stored)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(todos))
  }, [todos])

function toggle(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
  clear()
}

  function AddToDo(e){
    const name = ToDoName.current.value
    if(name === "") return
    setTodos(prevToDo => {
      return[...prevToDo, {id: Date.now(), name: name, complete: false}]
    })
    ToDoName.current.value = null
  }

  function clear(e){
    const newT = todos.filter(todo => !todo.complete)
    setTodos(newT)
  }

  return (    
    <>      
      <ToDoList todos={todos} toggle={toggle}/>
      <input ref={ToDoName} type="text" />
      <button onClick={AddToDo}>Add Todo</button>      
      <div>
        {todos.filter(todo => !todo.complete).length} left to do
      </div>
    </>
  );
}
