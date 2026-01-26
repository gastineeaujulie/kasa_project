import logements from '../data/logements.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import KasaValueItem from '../components/KasaValueItem';

export default function Logement() {
  const { id } = useParams();
  // const [logement, setLogement] = useState(null);

  // function getLogementById(id) {
  //   const logementFound = logements.find((logement) => logement.id === id);
  //   setLogement(logementFound);
  // }

  // useEffect(() => {
  //   getLogementById(id);
  // }, [id]);

  const logement = logements.find((logement) => logement.id === id);

  return (
    <div className="logement-annonce-item">
      <img
        src={logement.pictures}
        alt={`${logement.title} pictures`}
        className="logement-annonce-pictures"
      />
      {logement.title && (
        <div className="logement-annonce-title">{logement.title}</div>
      )}
      <p>{logement.location}</p>
      <ul className="logement-collapse item">
        <KasaValueItem
          valeur={{
            id: 'Description',
            description: logement.description,
          }}
        />
        <KasaValueItem
          valeur={{
            id: 'Equipements',
            description: (
              <ul className="equipments-list">
                {logement.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            ),
          }}
        />
      </ul>

      <div className="host">
        <div>{logement.host.name}</div>
        <img src={logement.host.picture} alt="host-picture" />
      </div>

      <div>
        {logement.tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </div>
  );
}
