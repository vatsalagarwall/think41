import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const generateTimeSlots = (start = 9, end = 17) => {
  const slots = [];
  for (let hour = start; hour < end; hour++) {
    slots.push(${hour}:00, ${hour}:30);
  }
  slots.push(${end}:00);
  return slots;
};

const formatDateKey = (date) =>
  date?.toISOString().split("T")[0];

const AdminPanel = ({ bookedSlots, setBookedSlots }) => {
  const [adminDate, setAdminDate] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [error, setError] = useState("");

  const toggleSlot = (slot) => {
    setSelectedSlots((prev) =>
      prev.includes(slot)
        ? prev.filter((s) => s !== slot)
        : [...prev, slot]
    );
  };

  const handleSubmit = () => {
    if (!adminDate || selectedSlots.length === 0) {
      setError("Please select a date and at least one slot.");
      return;
    }

    const dateKey = formatDateKey(adminDate);
    const existingSlots = bookedSlots[dateKey] || [];
    const merged = Array.from(new Set([...existingSlots, ...selectedSlots]));

    setBookedSlots((prev) => ({
      ...prev,
      [dateKey]: merged,
    }));

    setAdminDate(null);
    setSelectedSlots([]);
    setError("");
    alert("Pre-booked slots updated!");
  };

  const slots = generateTimeSlots();

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "40px" }}>
      <h2>🔒 Admin Panel — Mark Pre-Booked Slots</h2>
      <div style={{ marginBottom: "10px" }}>
        <DatePicker
          selected={adminDate}
          onChange={setAdminDate}
          minDate={new Date()}
          placeholderText="Select a date"
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
        {slots.map((slot) => (
          <button
            key={slot}
            onClick={() => toggleSlot(slot)}
            style={{
              padding: "8px 12px",
              borderRadius: "5px",
              backgroundColor: selectedSlots.includes(slot) ? "#007bff" : "#f1f1f1",
              color: selectedSlots.includes(slot) ? "white" : "black",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {slot}
          </button>
        ))}
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleSubmit} style={{ padding: "10px 20px" }}>
        ✅ Save Pre-Booked Slots
      </button>
    </div>
  );
};

export default AdminPanel;
