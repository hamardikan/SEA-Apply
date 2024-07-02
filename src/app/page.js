import { getReviews } from '@/services/reviews';
import Link from 'next/link';

export default async function Home() {
  const reviews = await getReviews()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-purple-800 mb-4">SEA Salon</h1>
          <p className="text-2xl text-purple-600 italic">Beauty and Elegance Redefined</p>
        </header>

        <main>
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Haircuts and Styling', 'Manicure and Pedicure', 'Facial Treatments'].map((service) => (
                <li key={service} className="bg-purple-100 rounded-lg p-4 text-center hover:bg-purple-200 transition duration-300">
                  <span className="text-lg font-semibold text-purple-700">{service}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-xl font-semibold text-purple-700">Thomas</p>
                <p className="text-lg text-purple-600">08123456789</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold text-purple-700">Sekar</p>
                <p className="text-lg text-purple-600">08164829372</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12 text-black">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Reviews</h2>
            {reviews.map((review) => <div key={review.id}>
              <div> {review.name} </div>
            </div>)}
          </section>

          <div className="flex justify-center space-x-4">
            <Link href="/reviews" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              View Reviews
            </Link>
            <Link href="/login" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Login
            </Link>
            <Link href="/reservation" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Make a Reservation
            </Link>
          </div>
        </main>

        <footer className="mt-16 text-center text-purple-600">
          <p>&copy; 2024 SEA Salon. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}