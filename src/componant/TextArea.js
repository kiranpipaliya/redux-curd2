import React, { useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const TextArea = (props) => {
  const toDoList = useSelector((state) => state);
  const textAreaRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.edit) {
      const editTitle = toDoList.filter((item) => item.id === props.editId)[0].title;
      textAreaRef.current.value = editTitle;
    }
  }, [props.edit]);

  const addTodo = () => {
    const textArea = textAreaRef.current.value;
    const textAreaValue = textArea.trim();
    if (textAreaValue && !props.edit) {
      dispatch({ type: 'ADD_TODO', title: textAreaValue });
      textAreaRef.current.value = '';
    }

    if (props.edit) {
      dispatch({
        type: 'EDIT_TODO',
        id: props.editId,
        title: textAreaValue,
      });
      textAreaRef.current.value = '';
      props.editDisable(props.edit);
    }
  };
  return (
    <div className='text-area'>
      <textarea ref={textAreaRef} className='form-control form-control-sm mb-3' rows='3' placeholder='Enter You Todo List Title'></textarea>
      <Button className='add-btn' onClick={addTodo}>
        {props.edit ? 'Edit' : 'Add'}
      </Button>
    </div>
  );
};
export default TextArea;
