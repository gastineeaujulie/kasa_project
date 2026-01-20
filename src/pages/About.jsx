import React from 'react';
import { useState } from 'react';
import about from '../assets/about.png';
import '../styles/About.scss';
import { valeurs } from '../data/ValeursList.js';
import vector from '../assets/vector.svg';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

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
              <button onClick={() => setIsOpen(!isOpen)} className="about-btn">
                {valeur.id}
                <img src={vector} alt="vector-icone" />
              </button>
              {isOpen && <div>{valeur.description}</div>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
