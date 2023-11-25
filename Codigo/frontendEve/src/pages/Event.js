// Event.js
import React from 'react';

const Event = ({ event }) => {
  return (
    <div className="bg-blue-500 text-white p-2 rounded">
      <p>{event.title}</p>
      <p>{event.start.toLocaleString()}</p>
    </div>
  );
};

export default Event;