import { createStore } from 'redux';

const ToDoReducer = (
  state = [
    { title: 'todo List', id: 'list1' },
    { title: 'todo List', id: 'list1' },
    { title: 'todo List', id: 'list1' },
    { title: 'todo List', id: 'list1' },
  ],
  action,
) => {
  if (action.type === 'ADD_TODO') {
    const updatedState = [{ title: action.title, id: `list${state.length + 1}` }, ...state];
    console.log(updatedState);
    return updatedState;
  }

  if (action.type === 'DELETE_TODO') {
    const updatedState = state.filter((todo) => todo.id !== action.id);
    console.log('updatedState', updatedState);
    return updatedState;
  }

  if (action.type === 'EDIT_TODO') {
    const getToDoIndex = state.findIndex((todo) => todo.id === action.id);
    console.log('getToDoIndex', action.id);
    state[getToDoIndex] = { ...state[getToDoIndex], title: action.title };
    const updatedState = state;
    return updatedState;
  }
  return state;
};

const store = createStore(ToDoReducer);

export default store;
