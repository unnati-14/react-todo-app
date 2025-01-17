import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: 'Enter todo task here'
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    hadleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={ this.hadleSubmit }>
                    <label>Add todo</label>
                    <input type="text" onChange={ this.handleChange } value={this.state.content}></input>
                </form>
            </div>
        )
    }
}

export default AddTodo;
