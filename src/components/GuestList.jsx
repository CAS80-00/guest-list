import React, { useState, useEffect } from "react";

function GuestList({ baseUrl, onSelectGuest }) {
  const [guests, setGuests] = useState([]);

  const fetchAllGuests = async () => {
    try {
      const response = await fetch(baseUrl);
      const result = await response.json();

      if (result.success) {
        setGuests(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch guest list:", error);
    }
  };

  useEffect(() => {
    fetchAllGuests();
  }, [baseUrl]);

  return (
    <ul className="guest-list">
      <li className="list-headers">
        <span>Name</span>
        <span>Email</span>
        <span>Phone</span>
      </li>

      {/* Rendered Guest Items */}
      {guests.map((guest) => (
        <li
          key={guest.id}
          onClick={() => onSelectGuest(guest.id)}
          className="guest-item"
        >
          <h3>{guest.name}</h3>
          <p>{guest.email}</p>
          <p>{guest.phone}</p>
        </li>
      ))}
    </ul>
  );
}

export default GuestList;
