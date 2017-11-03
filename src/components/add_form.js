import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddForm extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            title: '',
            details: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleInputChange(event){

        const { name, value } = event.target

        this.state[name] = value;

        this.setState(this.state);

    }
    handleFormSubmit(event){
        event.preventDefault();

        console.log('Form Value', this.state);
        this.props.addTodo(this.state);

        this.setState({
            title:'',
            details: ''
        })

    }
    render(){
        const { title, details }= this.state;
        return (
            <form onSubmit = {this.handleFormSubmit}>
                <p> Add To Do Item </p>
                <input name ='title' placeholder= 'Title' value = { title} onChange = {this.handleInputChange}/> 
                <input name ='details' placeholder= 'Details' value = { details } onChange = {this.handleInputChange}/>
                <button className='btn-floating btn-large '>Add</button> 
            </form>
        )
    }
}

export default connect(null, { addTodo })(AddForm);