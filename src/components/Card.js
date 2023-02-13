import React from 'react';
import './Card.css'

const Card = ({ name, img_link, imdb_rating }) => {
  console.log(name, img_link, imdb_rating)
  return (
    <div className="card-container">
      <div className='img'>
        <img className="card-img" alt='movie' src={img_link} />
        </div>
        <div className="card-details">
        <div><span className="title">{name}</span></div>
      </div>
    </div>
  );

}

export default Card;