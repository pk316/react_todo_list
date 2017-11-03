import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';
import toggleComplete from '../actions';

const TodoItems = props => {
    const { index, item } = props;
    
    const handleClick = () => {
        console.log('Delete item at index', index);
        props.deleteTodo(index)
    }
    const toggleComplete = () =>{
        console.log('Toggle complete at index', index);
        props.toggleComplete(index);

    }

    return (
        <li className='collection-item row'>
            <div className='col s8'>
                {item.title}    
            </div>
            <div className='col s2'>
            <button onClick = {toggleComplete} className={`btn ${item.complete?'yellow darken-2':'blue lighten-3 '}`}>{item.complete ? 'Restore': 'Complete'}</button>
            </div>
            <div className='col s2'>
                <button onClick = {handleClick} className='btn red darker-3'>Delete</button>
            </div>
        </li>
    )
}

export default connect ( null, { deleteTodo, toggleComplete })(TodoItems);