import React from 'react';
import about from '../assets/about.png';
import '../styles/About.scss';
import { valeurs } from '../data/ValeursList.js';
import KasaValueItemcopy from '../components/KasaValueItemcopy.jsx';

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
            <KasaValueItemcopy key={valeur.id} valeur={valeur} />
          ))}
        </ul>
      </div>
    </>
  );
}
