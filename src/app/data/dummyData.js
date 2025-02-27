const dummyData = {
    slots: [
      { id: 200, slotDate: "2025-03-10", openingTime: "09:00:00", closingTime: "10:00:00" },
      { id: 201, slotDate: "2025-03-10", openingTime: "10:00:00", closingTime: "11:00:00" },
      { id: 202, slotDate: "2025-03-10", openingTime: "11:00:00", closingTime: "12:00:00" },
      { id: 203, slotDate: "2025-03-11", openingTime: "09:00:00", closingTime: "10:00:00" },
      { id: 204, slotDate: "2025-03-11", openingTime: "10:00:00", closingTime: "11:00:00" },
      { id: 205, slotDate: "2025-03-12", openingTime: "09:00:00", closingTime: "10:00:00" },
    ],
    unavailableSlots: [
      { slotId: 101, slotDate: "2025-03-10", openingTime: "09:00:00", closingTime: "10:00:00", reason: "Booked" },
      { slotId: 102, slotDate: "2025-03-11", openingTime: "10:00:00", closingTime: "11:00:00", reason: "Maintenance " },
    ],
    holidays: [{ date: "2025-03-12", name: "National Holiday" }],
  };
  
  export default dummyData;
  