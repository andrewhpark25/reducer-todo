import React, {  useReducer } from 'react';
import {reducer, initialState} from  './reducers/reducer';
import { v4 as uuid } from 'uuid'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import './components/Todo.css';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  



 const addItem = item => {
    const newItem = {
      task: item,
      id: uuid(),
      completed: false
    }
   dispatch({ type: 'ADD_TODO', payload: newItem })
   console.log(newItem);
  };

  const toggleItem = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id })
  };

  
  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_TODO'})
  };

  return (
      <div className="App">
      
          <h1>Todo List</h1>
          <TodoForm addItem= {addItem}/>
          <TodoList state={state} toggleItem = {toggleItem} clearCompleted = {clearCompleted} />
         
      
      </div>
  );
}

export default App;
