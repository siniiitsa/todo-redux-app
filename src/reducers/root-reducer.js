import { combineReducers } from 'redux';

import todoListReducer from './todo-list-reducer';

const rootReducer = combineReducers({ todoListReducer });

export default rootReducer;
