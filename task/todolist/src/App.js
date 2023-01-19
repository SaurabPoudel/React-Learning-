import React, {useState,useRef,useEffect} from 'react';
import TodoList from './TodoList';
import uuid from 'react-uuid';
const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTodos) {
      const todosWithCompletedState = storedTodos.map(todo => ({
        ...todo,
        complete: localStorage.getItem(todo.id) === 'true'
      }));
      setTodos(todosWithCompletedState);
    }
  },[]);
  function clearCompletedTodos() {
    const remainingTodos = todos.filter(todo => !todo.complete);
    setTodos(remainingTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(remainingTodos));
  }
  
  function handleAddTodo(e){
    const name = todoNameRef.current.value;
    if(name === '') return
    const newTodo = {id:uuid(),name:name ,complete:false}
    setTodos(prevTodos =>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify([...prevTodos,newTodo]))
      return [...prevTodos,newTodo]
    })
    todoNameRef.current.value = null;
  }
  function toggleTodo(id){
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        const newTodo = {...todo, complete: !todo.complete};
        localStorage.setItem(todo.id, JSON.stringify(newTodo.complete));
        return newTodo;
      }
      return todo;
    }));
  }
  const remainingTodos = todos.filter(todo => !todo.complete);
  const remainingCount = remainingTodos.length;
  return (
    <>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input ref={todoNameRef} type="text"/>
    <button onClick={handleAddTodo}>Add todo</button>
    <button onClick={clearCompletedTodos}>Clear Complete</button>
    <div>{remainingCount} left to do</div>
    </>
  );
}

export default App;