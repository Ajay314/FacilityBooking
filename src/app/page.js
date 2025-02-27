"use client";

import { useState } from "react";
import BookingGrid from "./components/BookingGrid";
import BookingPopup from "./components/BookingPopup";
import dummyData from "./data/dummyData";

export default function Home() {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleSelectSlot = (slot) => {
    setSelectedSlots((prev) => [...prev, slot]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Facility Booking</h1>

      {/* Booking Grid Component */}
      <BookingGrid
        slots={dummyData.slots}
        unavailableSlots={dummyData.unavailableSlots}
        holidays={dummyData.holidays}
        onSelectSlot={handleSelectSlot}
      />

      {/* Show Create Booking Button if Slot is Selected */}
      {selectedSlots.length > 0 && (
        <button
          onClick={() => setShowPopup(true)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded block mx-auto"
        >
          Create Booking
        </button>
      )}

      {/* Booking Popup */}
      {showPopup && (
        <BookingPopup selectedSlots={selectedSlots} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}
