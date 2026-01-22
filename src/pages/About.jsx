import React from 'react';
import { useState } from 'react';
import about from '../assets/about.png';
import '../styles/About.scss';
import { valeurs } from '../data/ValeursList.js';
import vector from '../assets/vector.svg';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="about-banner">
        <img
          src={about}
          alt="paysage montagneux et forêt"
          className="about-img"
        />
      </div>
      <div className="about-container">
        <ul className="about-collapse-list">
          {valeurs.map((valeur) => (
            <li key={valeur.id} className="about-collapse-item">
              <button
                onClick={() => toggleCollapse(valeur.id)}
                className="about-btn"
              >
                {valeur.id}
                <img src={vector} alt="vector-icone" className="about-icone" />
              </button>
              {isOpen && (
                <div className="about-description">{valeur.description}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
