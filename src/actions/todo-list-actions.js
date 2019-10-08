export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const MARK_TODO_ITEM_IMPORTANT = 'MARK_TODO_ITEM_IMPORTANT';
export const MARK_TODO_ITEM_DONE = 'MARK_TODO_ITEM_DONE';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const FILTER_BY_STATUS = 'FILTER_BY_STATUS';
export const FILTER_ON_SEARCH = 'FILTER_ON_SEARCH';
export const INIT_TODO_LIST = 'INIT_TODO_LIST';

export const deleteTodoItem = payload => ({
  type: DELETE_TODO_ITEM,
  payload
});

export const markTodoItemImportant = payload => ({
  type: MARK_TODO_ITEM_IMPORTANT,
  payload
});

export const markTodoItemDone = payload => ({
  type: MARK_TODO_ITEM_DONE,
  payload
});

export const addTodoItem = payload => ({
  type: ADD_TODO_ITEM,
  payload
});

export const filterByStatus = payload => ({
  type: FILTER_BY_STATUS,
  payload
});

export const filterOnSearch = payload => ({
  type: FILTER_ON_SEARCH,
  payload
});

export const initTodoList = payload => ({ type: INIT_TODO_LIST, payload });
