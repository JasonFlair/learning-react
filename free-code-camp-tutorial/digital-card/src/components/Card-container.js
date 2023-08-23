import '../App.css';
import Profile from './Profile';
import Image from './Image';

function CardContainer() {
  return (
    <div className="card-container">
      <Image />
      <Profile />
    </div>
  );
}

export default CardContainer;