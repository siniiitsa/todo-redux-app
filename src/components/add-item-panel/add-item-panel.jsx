import React, { Component } from 'react';
import { connect } from 'react-redux';

import { generateID } from '../../utils';
import { addTodoItem } from '../../actions/todo-list-actions';

class AddItemPanel extends Component {
  state = {
    inputValue: ''
  };

  onInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  createTodoItem = description => ({
    id: generateID(),
    description,
    isDone: false,
    important: false,
    done: false
  });

  submitItem = event => {
    event.preventDefault();
    const task = this.state.inputValue;
    if (task.length >= 3) {
      const item = this.createTodoItem(task);
      this.props.addTodoItem(item);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return (
      <form onSubmit={event => this.submitItem(event)} className="mt-3">
        <div className="form-row">
          <input
            onChange={event => this.onInputChange(event)}
            className="form-control col mr-1 pl-2"
            id="new-item-input"
            type="text"
            placeholder="New task here..."
            value={this.state.inputValue}
          />
          <button type="submit" className="btn btn-outline-secondary">
            Add Task
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoItem: itemID => dispatch(addTodoItem(itemID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItemPanel);
