// import { useState } from 'react';
import React from 'react';
import logements from '../data/logements.json';
import homepage from '../assets/homepage.png';
import LogementItem from '../components/LogementItem';
import '../styles/Home.scss';

export default function Home() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div className="home-banner">
        <img
          src={homepage}
          alt="paysage montagneux au bord de l'ocean"
          className="home-img"
        />
        <h1 className="home-title">Chez vous, partout et ailleurs</h1>
      </div>
      <ul className="logements-list">
        {logements.map((logement) => (
          <LogementItem
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </ul>
    </>
  );
}
