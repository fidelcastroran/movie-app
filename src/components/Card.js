import React from 'react';

const Card = ({ name, img_link ,imdb_rating}) => {
  console.log(name, img_link, imdb_rating )
  return (
    <div>
      <img alt='movie' src={img_link} width='350px' />
      <div>
        <h2>{name}</h2>
        <h1>{imdb_rating}</h1>
      </div>
    </div>
  );

}

export default Card;