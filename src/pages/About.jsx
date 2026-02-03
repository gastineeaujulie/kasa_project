import React from 'react';
import about from '../assets/about.webp';
import '../styles/About.scss';
import { valeurs } from '../data/ValeursList.js';
import AccordionMenu from '../components/AccordionMenu.jsx';

export default function About() {
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
            <AccordionMenu key={valeur.name} valeur={valeur} />
          ))}
        </ul>
      </div>
    </>
  );
}
