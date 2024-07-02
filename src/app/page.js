import { auth } from '@/auth';
import LogoutButton from '@/components/LogoutButton';
import Navigations from '@/components/Navigations';
import { getReviews } from '@/services/reviews';
import { getServices } from '@/services/services';
import Link from 'next/link';

export default async function Home() {
  const reviews = await getReviews()
  const services = await getServices()
  const session = await auth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-purple-800 mb-4">SEA Salon</h1>
          <p className="text-2xl text-purple-600 italic">Beauty and Elegance Redefined</p>
          <Navigations session={session} />
        </header>

        <main>
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <li key={service.id} className="bg-purple-100 rounded-lg p-4 text-center hover:bg-purple-200 transition duration-300">
                  <span className="text-lg font-semibold text-purple-700">{service.name}</span>
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
            <div className="space-y-6">
              {reviews.slice(reviews.length - 3, reviews.length).map((review, index) => (
                <div key={index} className="bg-purple-100 rounded-lg p-4">
                  <h3 className="font-bold text-purple-800">{review.name}</h3>
                  <p className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                  <p className="text-purple-700 mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          </section>


        </main>

        <footer className="mt-16 text-center text-purple-600">
          <p>&copy; 2024 SEA Salon. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}