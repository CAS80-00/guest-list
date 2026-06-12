import React, { useState, useEffect } from "react";

function GuestDetails({ baseUrl, guestId, onBack }) {
  const [guest, setGuest] = useState(null);

  // Extracted function for individual profile fetching
  const fetchGuestDetails = async () => {
    try {
      const response = await fetch(`${baseUrl}/${guestId}`);
      const result = await response.json();

      if (result.success) {
        setGuest(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch single guest details:", error);
    }
  };

  // Listens explicitly to changes on the guestId prop
  useEffect(() => {
    fetchGuestDetails();
  }, [baseUrl, guestId]);

  if (!guest) return <p>Loading guest profile details...</p>;

  return (
    <div className="guest-details">
      <h2>{guest.name}</h2>
      <div
        className="details-body"
        style={{ background: "#f9f9f9", padding: "15px", borderRadius: "5px" }}
      >
        <p>
          <strong>Email:</strong> {guest.email}
        </p>
        <p>
          <strong>Phone:</strong> {guest.phone}
        </p>
        <p>
          <strong>Job:</strong> {guest.job}
        </p>
        <p>
          <strong>Bio:</strong> {guest.bio}
        </p>
      </div>

      {/* Clicking this clears selectedGuestId back to null in App.jsx */}
      <button
        onClick={onBack}
        style={{ marginTop: "15px", padding: "8px 16px", cursor: "pointer" }}
      >
        Back to List
      </button>
    </div>
  );
}

export default GuestDetails;
