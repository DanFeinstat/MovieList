import React, { Component } from 'react';
import Header from './header.jsx';
import MovieList from './movieList.jsx';
import Search from './search.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                { title: 'Mean Girls' },
                { title: 'Hackers' },
                { title: 'The Grey' },
                { title: 'Sunshine' },
                { title: 'Ex Machina' },
            ],
            moviesToDisplay: [
                { title: 'Mean Girls' },
                { title: 'Hackers' },
                { title: 'The Grey' },
                { title: 'Sunshine' },
                { title: 'Ex Machina' },
            ]
        }
    }
    render() {
        return (
            <div>
                <Header />
                <MovieList movies={this.state.moviesToDisplay} />
                <Search />

            </div>
        )
    }
}

export default App;