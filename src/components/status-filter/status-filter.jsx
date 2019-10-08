import React from 'react';
import { connect } from 'react-redux';

import { filterByStatus } from '../../actions/todo-list-actions';

const StatusFilter = ({ buttons, statusFilter, filterByStatus }) => {
  const buttonsJSX = buttons.map(btn => {
    const classes = `btn btn-outline-secondary${
      statusFilter === btn.status ? ' active' : ''
    }`;

    return (
      <button
        key={btn.label}
        status={btn.status}
        className={classes}
        onClick={() => filterByStatus(btn.status)}
      >
        {btn.label}
      </button>
    );
  });

  return <div className="btn-group">{buttonsJSX}</div>;
};

const mapStateToProps = state => {
  return {
    buttons: state.todoListReducer.statusFilterButtons,
    statusFilter: state.todoListReducer.statusFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterByStatus: status => dispatch(filterByStatus(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusFilter);
