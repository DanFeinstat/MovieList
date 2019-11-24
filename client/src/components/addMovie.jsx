import React, { Component } from 'react';

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMovie: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange({ target: { name, value } }) {
        this.setState({ [name]: value });
    }
    render() {
        return (
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    this.props.handleAddMovieSubmit(this.state.newMovie);
                    this.setState({ newMovie: '' });
                }
            }>
                <input type='text' name='newMovie' onChange={this.handleInputChange} value={this.state.newMovie} />
                <input type='submit' value='Add' />
            </form>
        )
    }
}

export default AddMovie;