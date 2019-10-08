import {
  DELETE_TODO_ITEM,
  MARK_TODO_ITEM_IMPORTANT,
  MARK_TODO_ITEM_DONE,
  ADD_TODO_ITEM,
  FILTER_BY_STATUS,
  FILTER_ON_SEARCH,
  INIT_TODO_LIST
} from '../actions/todo-list-actions';

const initialState = {
  todoItems: [],
  statusFilterButtons: [
    { label: 'All', status: 'all' },
    { label: 'Active', status: 'active' },
    { label: 'Done', status: 'done' }
  ],
  statusFilter: 'all',
  searchFilter: '',
  initLoaderActive: true
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO_ITEM: {
      const todoItems = state.todoItems.filter(
        item => item.id !== action.payload
      );
      return { ...state, todoItems };
    }
    case MARK_TODO_ITEM_IMPORTANT: {
      const todoItems = state.todoItems.map(item => ({ ...item }));
      const targetItem = todoItems.find(item => item.id === action.payload);
      targetItem.important = !targetItem.important;
      return { ...state, todoItems };
    }
    case MARK_TODO_ITEM_DONE: {
      const todoItems = state.todoItems.map(item => ({ ...item }));
      const targetItem = todoItems.find(item => item.id === action.payload);
      targetItem.done = !targetItem.done;
      return { ...state, todoItems };
    }
    case ADD_TODO_ITEM: {
      const todoItems = state.todoItems.map(item => ({ ...item }));
      todoItems.push(action.payload);
      return { ...state, todoItems };
    }
    case FILTER_BY_STATUS: {
      return { ...state, statusFilter: action.payload };
    }
    case FILTER_ON_SEARCH: {
      return { ...state, searchFilter: action.payload };
    }
    case INIT_TODO_LIST: {
      return { ...state, todoItems: action.payload, initLoaderActive: false };
    }
    default:
      return state;
  }
};

export default appReducer;
