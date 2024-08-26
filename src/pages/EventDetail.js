import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

function EventDetail() {
  const { id } = useParams();
  const event = { id, name: 'Concert A', date: '2024-09-01' }; // Fetch event details from backend in real apps

  return (
    <div className="container mt-4">
      <h1>{event.name}</h1>
      <p>Date: {event.date}</p>
      <BookingForm type="event" id={id} />
    </div>
  );
}

export default EventDetail;
