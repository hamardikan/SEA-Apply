"use client"

import { useEffect, useState } from "react";
import Link from "next/link"



export default function ReviewForm({ reviews }) {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = { name, rating, comment };

        const response = await fetch('/api/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview),
        });

        if (response.ok) {
            setName('');
            setRating(5);
            setComment('');
            alert('Success to submit review')
        } else {
            alert('Failed to submit review');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
            <div className="container mx-auto px-4 py-16">
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-purple-800 mb-4">Customer Reviews</h1>
                    <Link href="/" className="text-purple-600 hover:text-purple-800 transition duration-300">
                        ← Back to Home
                    </Link>
                </header>

                <main className="bg-white rounded-lg shadow-lg p-8 mb-12 text-black">
                    <form onSubmit={handleSubmit} className="mb-12">
                        <div className="mb-4">
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
                        <div className="mb-4">
                            <label htmlFor="rating" className="block text-purple-700 font-bold mb-2">Rating</label>
                            <select
                                id="rating"
                                value={rating}
                                onChange={(e) => setRating(Number(e.target.value))}
                                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                            >
                                {[1, 2, 3, 4, 5].map(num => (
                                    <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="comment" className="block text-purple-700 font-bold mb-2">Your Comment</label>
                            <textarea
                                id="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                required
                                className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"
                            />
                        </div>
                        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                            Submit Review
                        </button>
                    </form>

                    <div className="space-y-6">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-purple-100 rounded-lg p-4">
                                <h3 className="font-bold text-purple-800">{review.name}</h3>
                                <p className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                                <p className="text-purple-700 mt-2">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}


