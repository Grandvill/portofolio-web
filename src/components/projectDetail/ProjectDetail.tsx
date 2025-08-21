import { useParams } from 'react-router-dom';
import WildOasis from './WildOasis';
import ITFreelanceHub from './ITFreelanceHub';
import WildOasisNext from './WildOasisNext';
import Sikembar from './Sikembar';
import BigForumRevamp from './BigForumRevamp';

export default function ProjectDetail() {
  const { id } = useParams();

  if (id === 'itfreelancehub') return <ITFreelanceHub />;
  if (id === 'wild-oasis') return <WildOasis />;
  if (id === 'wild-oasis-next') return <WildOasisNext />;
  if (id === 'sikembar') return <Sikembar />;
  if (id === 'bigforum') return <BigForumRevamp />;

  return <h2 className="text-center mt-10 text-red-500">Project not found</h2>;
}
