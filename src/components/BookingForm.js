import React, { useState } from 'react';

function BookingForm({ type, id, showtime }) {
  const [name, setName] = useState('');
  const [tickets, setTickets] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example API request
    try {
      const response = await fetch(`/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, id, name, tickets, showtime }),
      });

      if (response.ok) {
        alert(`Booked ${tickets} ${type} tickets for ${name} at ${showtime}`);
        // Clear form fields
        setName('');
        setTickets(1);
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error booking tickets:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="tickets">Number of Tickets</label>
        <input
          type="number"
          className="form-control"
          id="tickets"
          value={tickets}
          onChange={(e) => setTickets(Number(e.target.value))}
          min="1"
          required
        />
      </div>
      <div className="form-group">
        <label>Showtime</label>
        <p>{showtime}</p>
      </div>
      <button type="submit" className="btn btn-primary">Book Now</button>
    </form>
  );
}

export default BookingForm;
