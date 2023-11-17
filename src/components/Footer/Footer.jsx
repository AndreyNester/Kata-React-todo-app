import './Footer.css';

import React from 'react';

import TaskFilter from '../TasksFilter/TaskFilter';

export default class Footer extends React.Component {
  render() {
    const { itemsCount, onFilter, onClearComplete } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{itemsCount} items left </span>
        <TaskFilter onFilter={onFilter} />
        <button
          onClick={() => {
            onClearComplete();
          }}
          className="clear-completed"
        >
          Clear completed
        </button>
      </footer>
    );
  }
}
