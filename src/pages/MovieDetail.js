import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

// Function to fetch movie details from the API
const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`/api/films/${id}`); // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return data.films.find(film => film.film_id === parseInt(id, 10)); // Find the movie with the matching ID
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setLoading(true);
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]); // Dependency array includes `id` to refetch if the ID changes

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>Error loading movie details: {error}</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="container mt-4">
      <h1>{movie.film_name}</h1>
      <img 
        src={movie.images.poster["1"].medium.film_image} 
        alt={movie.film_name} 
        style={{ width: '240px', height: 'auto', borderRadius: '5px' }} 
      />
      <p>Release Date: {movie.release_dates[0].release_date}</p>
      <p>Rating: <img src={movie.age_rating[0].age_rating_image} alt={movie.age_rating[0].rating} /></p>
      <p>Synopsis: {movie.synopsis_long}</p>
      {movie.film_trailer && (
        <div>
          <p>Trailer:</p>
          <video controls width="500">
            <source src={movie.film_trailer} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <BookingForm type="movie" id={id} />
    </div>
  );
}

export default MovieDetail;
