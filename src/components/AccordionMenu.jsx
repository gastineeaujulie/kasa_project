import vector from '../assets/vector.svg';
import '../styles/AccordionMenu.scss';
import { useState } from 'react';

export default function AccordionMenu({ valeur, className }) {
  const [isOpen, setItOpen] = useState(false);

  const toggleCollapse = () => {
    setItOpen(!isOpen);
  };

  return (
    <li className={'about-collapse-item ' + className}>
      <button
        onClick={toggleCollapse}
        className={`about-btn ${isOpen ? 'open' : ''}`}
      >
        {valeur.name}
        <img src={vector} alt="vector-icone" className="about-icone" />
      </button>

      <div className={`about-description ${isOpen ? 'open' : ''}`}>
        {valeur.description}
      </div>
    </li>
  );
}
