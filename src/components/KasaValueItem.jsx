import vector from '../assets/vector.svg';
import '../styles/KasaValueItem.scss';
import { useState } from 'react';

export default function KasaValueItem({ valeur, className }) {
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
      {isOpen && <div className="about-description">{valeur.description}</div>}
    </li>
  );
}
