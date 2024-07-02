'use client'

import { useState } from "react";

export default function AddServiceForm() {
    const [name, setName] = useState('')
    const [duration, setDuration] = useState(60)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newService = { name, duration };
        const response = await fetch('/api/service', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newService),
        });

        if (response.ok) {
            setName('')
            setDuration(60)
            alert('Successfully added a new service!');
        } else {
            alert('Failed to add');
        }
    }

    return (<form onSubmit={handleSubmit} className="mb-12 text-black">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">Add New Service</h2>
        <div className="mb-4">
            <label htmlFor="name" className="block text-purple-700 font-bold mb-2">Service Name</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="name" className="block text-purple-700 font-bold mb-2">Duration in minutes</label>
            <input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                required
                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
        </div>

        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Add new service
        </button>
    </form>)
}