import React from 'react';
import { connect } from 'react-redux';

import { filterOnSearch } from '../../actions/todo-list-actions';

const SearchPanel = ({ filterOnSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search here"
      className="form-control mr-1"
      onChange={event => filterOnSearch(event.target.value)}
    />
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    filterOnSearch: searchValue => dispatch(filterOnSearch(searchValue))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel);
