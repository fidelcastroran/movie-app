import React from 'react';
import "./SearchBox.css"

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='Searchbox'>
      <input
       style={{color: "red"}}
        type='search'
        placeholder='search movies'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;