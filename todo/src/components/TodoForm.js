import React, {useState} from 'react';

export default function TodoForm (props) {
    const [newTodo, setNewTodo] = useState('');
    
  const handleChanges = e => {

    setNewTodo(e.target.value);
  };

  const submitItem = e => {
    e.preventDefault();
    props.addItem(newTodo);
    setNewTodo('');
  }

    return (
        <form onSubmit={submitItem}>
         <input
            className="title-input"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={handleChanges}
          />
         <button type='submit'>Add Todo</button>
        </form>
      );

}

