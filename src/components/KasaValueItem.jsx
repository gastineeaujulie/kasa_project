import vector from '../assets/vector.svg';
import { useState } from 'react';

export default function KasaValueItem({ valeur }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li key={valeur.id} className="about-collapse-item">
      <button onClick={toggleCollapse} className="about-btn">
        {valeur.id}
        <img src={vector} alt="vector-icone" className="about-icone" />
      </button>
      {isOpen && <div className="about-description">{valeur.description}</div>}
    </li>
  );
}
