import React, { Component } from 'react';

class LocalSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        }
    }

    render() {
        return (
            <form>
                <input type='text' name="searchInput" />
                <input type="submit" />
            </form>
        )
    }
}

export default LocalSearch;

