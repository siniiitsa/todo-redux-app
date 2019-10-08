import React from 'react';
import { connect } from 'react-redux';

import './app-header.css';

const AppHeader = ({ todoItems }) => {
  const tasksCount = todoItems.length;
  const doneCount = todoItems.filter(item => item.done).length;
  const activeCount = tasksCount - doneCount;

  return (
    <div className="app-header">
      <h1>
        <span className="badge badge-secondary">TODO</span>
      </h1>
      <p className="app-header-info">
        <span className="badge badge-success">{doneCount} done</span>{' '}
        <span className="badge badge-warning">{activeCount} active</span>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todoItems: state.todoListReducer.todoItems
  };
};

export default connect(mapStateToProps)(AppHeader);
