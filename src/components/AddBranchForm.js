'use client'


import { useState } from "react";

export default function AddBranchForm({ services }) {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [openingTime, setOpeningTime] = useState('')
    const [closingTime, setClosingTime] = useState('')
    const [availableServices, setAvailableServices] = useState(
        Object.fromEntries(services.map((s) => [s.id, true]))
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBranch = { name, location, openingTime, closingTime };
        const response = await fetch('/api/branch', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...newBranch,
            }),
        });

        if (response.ok) {
            setName('')
            setLocation('')
            setOpeningTime('')
            setClosingTime('')
            setAvailableServices(
                Object.fromEntries(services.map((s) => [s.id, true]))
            )
            alert('Successfully added a new branch!');
        } else {
            alert('Failed to add');
        }
    }

    return (<form onSubmit={handleSubmit} className="mb-12 text-black">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">Add New Branch</h2>
        <div className="mb-4">
            <label htmlFor="name" className="block text-purple-700 font-bold mb-2">Branch Name</label>
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
            <label htmlFor="name" className="block text-purple-700 font-bold mb-2">Location</label>
            <input
                id="location"
                type="string"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="name" className="block text-purple-700 font-bold mb-2">Opening Time</label>
            <input
                id="opening-time"
                type="time"
                value={openingTime}
                onChange={(e) => setOpeningTime(e.target.value)}
                required
                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="name" className="block text-purple-700 font-bold mb-2">Closing Time</label>
            <input
                id="closing-time"
                type="time"
                value={closingTime}
                onChange={(e) => setClosingTime(e.target.value)}
                required
                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="time" className="block text-purple-700 font-bold mb-2">Available Services</label>
            {services.map((service) => (
                <div key={service.id} >
                    <input
                        id={`service-${service.id}`}
                        value={service.id}
                        type="checkbox"
                        name={service.name}
                        checked={availableServices[services.id]}
                        onChange={(e) => setAvailableServices(!e.target.checked)}
                    />
                    <label htmlFor={`service-${service.id}`}>
                        {service.name}
                    </label>
                </div>
            ))}
        </div>

        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Add new branch
        </button>
    </form>)
}