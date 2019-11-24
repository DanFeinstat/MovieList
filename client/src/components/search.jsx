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
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.handleFilterSubmit(this.state.searchInput)
            }}>
                <input type='text' name="searchInput" onChange={this.handleInputChange} />
                <input type="submit" value='Go!' />
            </form>
        )
    }
}

export default Search;

