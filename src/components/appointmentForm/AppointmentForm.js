import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit, 
  setName,
  name
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          id="name"
          name="name"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          id="date"
          name="date"
          min={getTodayString()}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Time"
          id="time"
          name="time"
          required
        />
        <ContactPicker contacts={contacts} onChange={(e) => setContact(e.target.value)} value={contact} name="contact" />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
