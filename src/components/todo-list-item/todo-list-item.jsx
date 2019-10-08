import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({
  id,
  todoItems,
  description,
  important,
  done,
  deleteTodoItem,
  markTodoItemImportant,
  markTodoItemDone
}) => {
  const itemClasses = `item-label${important ? ' item-important' : ''}${
    done ? ' item-done' : ''
  }`;

  return (
    <span className="todo-list-item">
      <span className={itemClasses} onClick={() => markTodoItemDone(id)}>
        {description}
      </span>
      <button
        onClick={() => deleteTodoItem(id)}
        type="button"
        className="btn btn-outline-danger item-btn float-right"
      >
        <i className="fa fa-trash" />
      </button>
      <button
        onClick={() => markTodoItemImportant(id)}
        type="button"
        className="btn btn-outline-success item-btn mr-1 float-right"
      >
        <i className="fa fa-exclamation" />
      </button>
    </span>
  );
};

export default TodoListItem;
