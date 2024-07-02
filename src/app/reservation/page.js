
import ReservationForm from '@/components/ReservationForm';
import { getServices } from '@/services/services';

export default async function Reservation() {
  const services = await getServices();

  return <ReservationForm services={services} />
}
