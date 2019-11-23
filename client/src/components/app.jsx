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
        this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    }

    handleFilterSubmit(e, searchTerm) {
        let newMoviesToDisplay = [];
        this.state.movies.forEach(movie => {
            if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                newMoviesToDisplay.push(movie);
            }
        })
        this.setState({ moviesToDisplay: newMoviesToDisplay });
    }
    render() {
        return (
            <div>
                <Header />
                <MovieList movies={this.state.moviesToDisplay} />
                <Search handleFilterSubmit={this.handleFilterSubmit} />

            </div>
        )
    }
}

export default App;