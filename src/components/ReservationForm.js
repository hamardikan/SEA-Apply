// src/components/ReservationForm.js

import { useState } from 'react';

export default function ReservationForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('HAIRCUTS');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/reservation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, service, dateTime }),
    });

    if (response.ok) {
      alert('Reservation successful!');
    } else {
      alert('Reservation failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
      <select value={service} onChange={(e) => setService(e.target.value)} required>
        <option value="HAIRCUTS">Haircuts and styling</option>
        <option value="MANICURE">Manicure and pedicure</option>
        <option value="FACIAL">Facial treatments</option>
      </select>
      <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
      <button type="submit">Make Reservation</button>
    </form>
  );
}
