import React from "react";

const BookingConfirmation = ({ date, slot }) => {
  const formattedDate = date.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <h2>✅ Appointment Confirmed</h2>
      <p>
        Your appointment is booked for <strong>{formattedDate}</strong> at{" "}
        <strong>{slot}</strong>.
      </p>
    </div>
  );
};

export default BookingConfirmation;
