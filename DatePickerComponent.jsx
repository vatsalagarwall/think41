import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Select a Date</h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        minDate={new Date()}
        placeholderText="Click to select a date"
        dateFormat="MMMM d, yyyy"
      />
    </div>
  );
};

export default DatePickerComponent;
