import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ListBox from './componant/ListBox';
import TextArea from './componant/TextArea';
import { useSelector } from 'react-redux';
function App() {
  const toDoList = useSelector((state) => state);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState('');

  const editHandlerApp = (id, edit) => {
    setEdit(edit);
    setEditId(id);
  };
  console.log(editId);
  const editDisableHandler = (edit) => {
    setEdit(!edit);
  };
  return (
    <main>
      <h1>Todo List</h1>
      <TextArea editDisable={editDisableHandler} edit={edit} editId={editId} />
      <ul className='list'>
        {toDoList.map((todo, i) => (
          <li key={i}>
            <ListBox drillEditHandler={editHandlerApp} item={todo} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
