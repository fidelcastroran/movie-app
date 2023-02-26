import './App.css';
import { useEffect, useState } from "react"
import axios from "axios";
import { MovieCard } from './components/MovieCard/MovieCard';

function App() {

  const [movies, setMovies] = useState([])
  const [SearchItem, setSearchItem] = useState('')

  const getMovies = async() => {
    try{
      const response = await axios ('https://movies-app.prakashsakari.repl.co/api/movies')
       setMovies(response.data);
      //  console.log(response.data)
    }catch(err){
      console.log(err);
    }
  }

  useEffect (() => {
    getMovies();
  },[])

  const handleSearch = (event) => {
    setSearchItem(event.target.value)
  }

  const filteredMovies = movies.filter(movie => {
    return movie.name.toLowerCase().includes(SearchItem.toLowerCase())
  });
  console.log('fmovies', filteredMovies)
  console.log('movie', movies)
  
  return (
    <div className="App">
    <header className='header'>
      <h1>Movies</h1>
      <div className='search-container'>
        <input 
        type='text'
        placeholder='Search-movies...'
        value={SearchItem}
        onChange = {handleSearch}
        className="search-input" />
      </div>
      </header>

       <main className='main'>
        {
          movies && movies.length > 0 && filteredMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        }
      </main>
    
  {/* <main className="main">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </main> */}
    </div>
  );
}

export default App;
