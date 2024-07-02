

import { getReviews } from '@/services/reviews'
import ReviewForm from '../../components/ReviewForm'


export default async function Reviews() {
  const reviews = await getReviews()
  return <ReviewForm reviews={reviews} />
}
