import '../App.css';
import Profile from './Profile';
import Image from './Image';
import About from './About';
import Contact from './Contact';

function CardContainer() {
  return (
    <div className="card-container">
      < Image />
      < Profile />
      <Contact />
      <About />
    </div>
  );
}

export default CardContainer;