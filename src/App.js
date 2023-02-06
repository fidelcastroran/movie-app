import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './SearchBox';
import './App.css';
// import Scroll from './components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchfield: ''
    }
  }

  componentDidMount() {
      fetch('https://movies-app.prakashsakari.repl.co/api/movies')
      .then(response => response.json())
      .then(users => { this.setState({ movies: users }) });
      
     
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { movies, searchfield } = this.state;
    const filteredMovies = movies.filter(movie => {
      return movie.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !movies.length ?
      <h1>Loading</h1> :
      (
        <div>
          <h1>MOVIES...... </h1>
          <SearchBox searchChange={this.onSearchChange} />
          {/* <Scroll> */}
          <CardList movies={filteredMovies} />
          {/* </Scroll> */}
        </div>
      );
  }
}

export default App;