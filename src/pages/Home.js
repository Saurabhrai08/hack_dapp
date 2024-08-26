import React from 'react';
import EventList from '../components/EventList';
import MovieList from '../components/MovieList';

function Home() {
  return (
    <div className="container mt-4">
      <h1>Upcoming Events</h1>
      <EventList />
      <h1 className="mt-5">Now Showing Movies</h1>
      <MovieList />
    </div>
  );
}

export default Home;
