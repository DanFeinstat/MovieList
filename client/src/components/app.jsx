import React, { Component } from 'react';
import Header from './header.jsx';
import MovieList from './movieList.jsx';

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
                <MovieList movies={this.state.movies} />
                {/* <div> Hello World!!!</div > */}

            </div>
        )
    }
}

export default App;