import { useParams } from 'react-router-dom';
import WildOasis from './WildOasis';
import ITFreelanceHub from './ITFreelanceHub';

export default function ProjectDetail() {
  const { id } = useParams();

  if (id === 'wild-oasis') return <WildOasis />;
  if (id === 'itfreelancehub') return <ITFreelanceHub />;

  return <h2 className="text-center mt-10 text-red-500">Project not found</h2>;
}
