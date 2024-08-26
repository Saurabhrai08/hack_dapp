import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Movie A', showtime: '2024-08-30 18:00' },
  { id: 2, title: 'Movie B', showtime: '2024-08-31 20:00' },
];

function MovieList() {
  return (
    <ul className="list-group">
      {movies.map(movie => (
        <li key={movie.id} className="list-group-item">
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link> - {movie.showtime}
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
