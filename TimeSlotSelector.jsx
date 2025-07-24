import React from "react";

const generateTimeSlots = (start = 9, end = 17) => {
  const slots = [];
  for (let hour = start; hour < end; hour++) {
    slots.push(${hour}:00, ${hour}:30);
  }
  slots.push(${end}:00);
  return slots;
};

const TimeSlotSelector = ({ onSlotSelect, bookedSlots }) => {
  const slots = generateTimeSlots();

  return (
    <div>
      <h3>Select a Time Slot</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {slots.map((slot) => {
          const isBooked = bookedSlots.includes(slot);
          return (
            <button
              key={slot}
              onClick={() => !isBooked && onSlotSelect(slot)}
              disabled={isBooked}
              style={{
                padding: "10px 15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                cursor: isBooked ? "not-allowed" : "pointer",
                backgroundColor: isBooked ? "#ddd" : "#f8f8f8",
                color: isBooked ? "#999" : "black",
              }}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSlotSelector;
