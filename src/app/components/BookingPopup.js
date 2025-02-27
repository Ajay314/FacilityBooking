
 "use client";

import { useState } from "react";
import { XCircle } from "lucide-react";

const BookingPopup = ({ selectedSlots, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    reason: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.contact.trim()) newErrors.contact = "Contact info is required!";
    if (!formData.reason.trim()) newErrors.reason = "Please provide a reason for booking!";
    return newErrors;
  };

  const handleConfirm = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }

    const bookingData = {
      ...formData,
      slots: selectedSlots,
    };

    console.log("Booking Data:", bookingData);
    alert("🎉 Booking Confirmed! ✅");

    onClose(); 
  };

  return (
   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div className="relative bg-white p-6 rounded-lg shadow-xl w-full max-w-md border border-gray-300">
    
    <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-red-500">
      <XCircle className="w-5 h-5 display-flex"  />
    </button>

    <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Create Booking</h2>

    <p className="text-sm text-gray-600 mb-4 text-center">
      ⏰ Selected slot: {selectedSlots.length > 0 ? `${selectedSlots[0].slotDate} at ${selectedSlots[0].openingTime}` : "No slot selected"}
    </p>

    {/* Booking Form */}
    <form className="space-y-4 text-gray-700 flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
      </div>

      {/* Contact Info Field */}
      <div className="flex flex-col">
        <label htmlFor="contact" className="text-sm font-medium text-gray-700">Contact Info</label>
        <input
          id="contact"
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter phone or email"
        />
        {errors.contact && <p className="text-xs text-red-500 mt-1">{errors.contact}</p>}
      </div>

      {/* Reason for Booking Field */}
      <div className="flex flex-col">
        <label htmlFor="reason" className="text-sm font-medium text-gray-700">Reason for Booking</label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Why are you booking this slot?"
        />
        {errors.reason && <p className="text-xs text-red-500 mt-1">{errors.reason}</p>}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-between">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-all"
        >
          ❌ Cancel
        </button>
        <button
          type="button"
          onClick={handleConfirm}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          ✅ Confirm Booking
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default BookingPopup;
