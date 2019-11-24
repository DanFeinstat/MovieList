import React, { Component } from 'react';
import Header from './header.jsx';
import MovieList from './movieList.jsx';
import Search from './search.jsx';
import AddMovie from "./addMovie.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                // { title: 'Mean Girls' },
                // { title: 'Hackers' },
                // { title: 'The Grey' },
                // { title: 'Sunshine' },
                // { title: 'Ex Machina' },
            ],
            moviesToDisplay: [
                // { title: 'Mean Girls' },
                // { title: 'Hackers' },
                // { title: 'The Grey' },
                // { title: 'Sunshine' },
                // { title: 'Ex Machina' },
            ]
        }
        this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
        this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
    }
    handleAddMovieSubmit(movieName) {
        let newMovies = [...this.state.movies, { title: movieName }];
        this.setState({ movies: newMovies }, () => { this.handleFilterSubmit('') });
    }
    handleFilterSubmit(searchTerm) {
        let newMoviesToDisplay = [];
        this.state.movies.forEach(movie => {
            if (movie.title.toLowerCase().includes(searchTerm.length ? (searchTerm.toLowerCase()) : searchTerm)) {
                newMoviesToDisplay.push(movie);
            }
        })
        if (!newMoviesToDisplay.length) {
            newMoviesToDisplay.push({ title: `No movie title matching ${searchTerm} was found, please check your spelling and try again` });
        }
        this.setState({ moviesToDisplay: newMoviesToDisplay });
    }
    render() {
        return (
            <div>
                <Header />
                <MovieList movies={this.state.moviesToDisplay} />
                <AddMovie handleAddMovieSubmit={this.handleAddMovieSubmit} />
                <Search handleFilterSubmit={this.handleFilterSubmit} />

            </div>
        )
    }
}

export default App;