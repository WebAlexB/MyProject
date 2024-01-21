import React, {Component} from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

    render() {
        const {
            label,
            onDeleted,
            doneItem,
            importantItem,
            done,
            important
        } = this.props;

        let className = 'todo-list-item';
        if (done) {
            className += ' done';
        }
        if (important) {
            className += ' important';
        }
        return (
            <span className={className}>
             <span className="todo-list-item-label" onClick={doneItem}>
            {label}
           </span>
            <div className='button-content'>
              <button type="button"
                      className="btn btn-outline-success btn-sm" onClick={importantItem}>
                  <i className="fa fa-exclamation"/>
              </button>
              <button type="button"
                      className="btn btn-outline-danger btn-sm flex " onClick={onDeleted}>
                  <i className="fa fa-trash-can"/>
              </button>
            </div>
        </span>
        );
    }
}