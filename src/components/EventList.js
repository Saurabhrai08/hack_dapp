import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  { id: 1, name: 'Concert A', date: '2024-09-01', image: '/images/concertA.jpg' },
  { id: 2, name: 'Concert B', date: '2024-10-15', image: '/images/concertB.jpg' },
];

function EventList() {
  return (
    <ul className="list-group">
      {events.map(event => (
        <li key={event.id} className="list-group-item">
          <img src={event.image} alt={event.name} style={{ width: '100px', height: 'auto', borderRadius: '5px' }} />
          <Link to={`/event/${event.id}`} className="ml-3">{event.name}</Link> - {event.date}
        </li>
      ))}
    </ul>
  );
}

export default EventList;
