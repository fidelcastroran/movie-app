import React from 'react';
import Card from './Card';

const CardList = ({ movies }) => {
  return (
    <div className='main'>
      {
        movies.map((user, i) => {
          console.log(user,i,'CardList')
          return (
            <Card
              id={movies[i].id}
              name={user.name}
              img_link={movies[i].img_link}
              rating={user.imdb_rating}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;