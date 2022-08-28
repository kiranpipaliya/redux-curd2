import React from 'react';
import './list-box.css';
import { Trash, Edit } from 'react-feather';
import { useDispatch } from 'react-redux';
const ListBox = (props) => {
  const item = props.item;

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch({
      type: 'DELETE_TODO',
      id: item.id,
    });
  };
  const editHandler = () => {
    props.drillEditHandler(item.id, true);
  };

  return (
    <>
      <div className='list-box'>
        <h2 className='list-title'>{item.title}</h2>
        <div className='list-box-action'>
          <button onClick={editHandler} className='edit'>
            <Edit />
          </button>
          <button onClick={deleteHandler} className='delete'>
            <Trash />
          </button>
        </div>
      </div>
    </>
  );
};
export default ListBox;
