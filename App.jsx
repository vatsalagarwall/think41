import React, { useState } from "react";
import DatePickerComponent from "./components/DatePickerComponent";
import TimeSlotSelector from "./components/TimeSlotSelector";
import BookingConfirmation from "./components/BookingConfirmation";
import AdminPanel from "./components/AdminPanel";

const formatDateKey = (date) => date?.toISOString().split("T")[0];

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [bookedSlots, setBookedSlots] = useState({
    "2025-07-26": ["10:00", "12:30", "15:00"],
  });

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setIsBooked(true);
  };

  const handleReset = () => {
    setSelectedDate(null);
    setSelectedSlot(null);
    setIsBooked(false);
  };

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h1>📅 Book Your Appointment</h1>
      {!isBooked ? (
        <>
          <DatePickerComponent onDateSelect={setSelectedDate} />
          {selectedDate && (
            <TimeSlotSelector
              date={selectedDate}
              bookedSlots={bookedSlots[formatDateKey(selectedDate)] || []}
              onSlotSelect={handleSlotSelect}
            />
          )}
        </>
      ) : (
        <>
          <BookingConfirmation date={selectedDate} slot={selectedSlot} />
          <button onClick={handleReset} style={{ marginTop: "20px" }}>
            Book Another Appointment
          </button>
        </>
      )}
      <AdminPanel bookedSlots={bookedSlots} setBookedSlots={setBookedSlots} />
    </div>
  );
};

export default App;
