'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Reservation() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Haircuts and styling');
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
      // Reset form
      setName('');
      setPhone('');
      setService('Haircuts and styling');
      setDateTime('');
    } else {
      alert('Reservation failed!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-purple-800 mb-4">Make a Reservation</h1>
          <Link href="/" className="text-purple-600 hover:text-purple-800 transition duration-300">
            ← Back to Home
          </Link>
        </header>

        <main className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-purple-700 font-bold mb-2">Your Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-purple-700 font-bold mb-2">Phone Number</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-purple-700 font-bold mb-2">Service</label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option>Haircuts and styling</option>
                <option>Manicure and pedicure</option>
                <option>Facial treatments</option>
              </select>
            </div>
            <div>
              <label htmlFor="dateTime" className="block text-purple-700 font-bold mb-2">Date and Time</label>
              <input
                id="dateTime"
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                required
                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Make Reservation
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
