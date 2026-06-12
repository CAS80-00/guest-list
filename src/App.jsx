import { useState } from "react";
import "./index.css";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/CARLOS/guests";

function App() {
  const [selectedGuestId, setSelectedGuestId] = useState(null);

  return (
    <div className="app-container">
      <h1>Guest List</h1>

      {selectedGuestId ? (
        <GuestDetails
          baseUrl={API_URL}
          guestId={selectedGuestId}
          onBack={() => setSelectedGuestId(null)}
        />
      ) : (
        <GuestList baseUrl={API_URL} onSelectGuest={setSelectedGuestId} />
      )}
      <p>Select a guest to see more details</p>
    </div>
  );
}

export default App;
