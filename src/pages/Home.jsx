import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../data/logements.json';
import homepage from '../assets/homepage.png';
import LogementItem from '../components/LogementItem';
import '../styles/Home.scss';

export default function Home() {
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
          <Link
            key={logement.id}
            to={`/logement/${logement.id}`}
            className="logement-item-link"
          >
            <LogementItem
              id={logement.id}
              cover={logement.cover}
              title={logement.title}
            />
          </Link>
        ))}
      </ul>
    </>
  );
}
