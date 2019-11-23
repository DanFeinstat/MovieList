import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange({ target: { name, value } }) {
        this.setState({ [name]: value });
    }
    render() {
        return (
            <form>
                <input type='text' name="searchInput" onChange={this.handleInputChange} />
                <input type="submit" />
            </form>
        )
    }
}

export default Search;

