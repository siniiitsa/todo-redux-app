import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  deleteTodoItem,
  markTodoItemImportant,
  markTodoItemDone,
  initTodoList
} from '../../actions/todo-list-actions';
import TodoListItem from '../todo-list-item';
import TodoService from '../../services/todo-service';
import Loader from '../loader/loader';

class TodoList extends Component {
  todoService = new TodoService();

  componentDidMount() {
    const { initTodoList } = this.props;
    setTimeout(() => {
      this.todoService.getTodoItems().then(todos => initTodoList(todos));
    }, 1000);
  }

  filterByStatus = (items, status) => {
    if (status === 'done') return items.filter(item => item.done);
    if (status === 'active') return items.filter(item => !item.done);
    return items;
  };

  filterBySearch = (items, value) => {
    return items.filter(item =>
      item.description.toLowerCase().includes(value.toLowerCase())
    );
  };

  createTodos = items => {
    const {
      todoItems,
      deleteTodoItem,
      markTodoItemImportant,
      markTodoItemDone
    } = this.props;

    return items.map(item => (
      <li key={item.id} className='list-group-item'>
        <TodoListItem
          todoItems={todoItems}
          deleteTodoItem={deleteTodoItem}
          markTodoItemImportant={markTodoItemImportant}
          markTodoItemDone={markTodoItemDone}
          {...item}
        />
      </li>
    ));
  };

  render() {
    const { todoItems, statusFilter, searchFilter, isLoading } = this.props;

    const itemsByStatus = this.filterByStatus(todoItems, statusFilter);
    const itemsBySearch = this.filterBySearch(itemsByStatus, searchFilter);
    const todos = this.createTodos(itemsBySearch);
    const loader = isLoading && <Loader />;

    return (
      <ul className='list-group'>
        {loader}
        {todos}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoItems: state.todoListReducer.todoItems,
    statusFilter: state.todoListReducer.statusFilter,
    searchFilter: state.todoListReducer.searchFilter,
    isLoading: state.todoListReducer.initLoaderActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodoItem: itemID => dispatch(deleteTodoItem(itemID)),
    markTodoItemImportant: itemID => dispatch(markTodoItemImportant(itemID)),
    markTodoItemDone: itemID => dispatch(markTodoItemDone(itemID)),
    initTodoList: todos => dispatch(initTodoList(todos))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
