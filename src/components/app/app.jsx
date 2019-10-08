import React from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import AddItemPanel from '../add-item-panel';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import './app.css';

const App = () => {
  return (
    <div className="container app">
      <AppHeader />
      <div className="d-flex mb-2">
        <SearchPanel />
        <StatusFilter />
      </div>
      <TodoList />
      <AddItemPanel />
    </div>
  );
};

export default App;
