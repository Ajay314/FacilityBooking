"use client";

import React from "react";

const BookingGrid = ({ slots, unavailableSlots, holidays, onSelectSlot }) => {
  if (!slots || slots.length === 0) {
    return <p className="text-center text-red-500">No available slots</p>;
  }

  // Extract unique dates for columns (Days)
  const uniqueDates = [...new Set(slots.map((slot) => slot.slotDate))];

  // Extract unique time slots for rows
  const uniqueTimes = [...new Set(slots.map((slot) => slot.openingTime))];

  return (
    <div className="w-full overflow-x-auto p-4">
      <h2 className="text-xl font-bold text-center mb-4">📅 Facility Booking Calendar</h2>
      
      <table className="w-full border-collapse border border-gray-400 shadow-lg">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-400 p-3"> Time Slots</th>
            {uniqueDates.map((date) => (
              <th key={date} className="border border-gray-400 p-3">{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {uniqueTimes.map((time) => (
            <tr key={time}>
              {/* Time Column */}
              <td className="border border-gray-400 p-3 font-semibold">{time}</td>

              {/* Day Columns */}
              {uniqueDates.map((date) => {
                // Find the slot for this date & time
                const slot = slots.find((s) => s.slotDate === date && s.openingTime === time);
                const isUnavailable = unavailableSlots.some(
                  (u) => u.slotDate === date && u.openingTime === time
                );
                const isHoliday = holidays.some((h) => h.date === date);

                return (
                  <td
                    key={`${date}-${time}`}
                    className={`border border-gray-400 p-3 text-center cursor-pointer font-medium transition-all duration-200
                      ${isHoliday ? "bg-red-500 text-white cursor-not-allowed" :
                        isUnavailable ? "bg-gray-500 text-white cursor-not-allowed" :
                        slot ? "bg-green-500 text-white hover:bg-green-700" :
                        "bg-white"}`
                    }
                    onClick={() => slot && !isUnavailable && !isHoliday && onSelectSlot(slot)}
                  >
                    {isHoliday ? "Holiday" : isUnavailable ? "Booked" : slot ? "Available" : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingGrid;
