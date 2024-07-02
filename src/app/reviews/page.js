
import prisma from '@/lib/db'
import ReviewForm from '../../components/ReviewForm'

export async function getReviews() {
  const data = await prisma.review.findMany()
  return data
}

export default async function Reviews() {
  const reviews = await getReviews()
  return <ReviewForm reviews={reviews} />
}
