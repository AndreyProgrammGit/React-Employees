// import { useState } from 'react';
import React from 'react';
import './employers-list-item.css';

class EmployeesListItem extends React.Component {
    render() {
        const { name, salary, onDelete, onToggleProp } = this.props;

        let classNames = "list-group-item d-flex justify-content-between";

        if (this.props.increase) {
            classNames += ' increase';
        } if (this.props.rise) {
            classNames += ' like'
        }

        return (
            <li className={classNames}>
                <span data-toggle="rise" onClick={onToggleProp} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" value={salary + ' $'} readOnly/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button data-toggle="increase" onClick={onToggleProp} type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button onClick={() => onDelete()} type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;