import logements from '../data/logements.json';
import { useParams } from 'react-router-dom';
import KasaValueItem from '../components/KasaValueItem';
import '../styles/Logement.scss';
import Rating from '../components/Rating.jsx';
import Carrousel from '../components/Carrousel.jsx';

export default function Logement() {
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  return (
    <div className="logement-annonce-item">
      <Carrousel pictures={logement.pictures} title={logement.title} />

      <div className="description-div">
        <div className="title-description-tag-div">
          <div className="title-description-div">
            {logement.title && (
              <div className="logement-title">{logement.title}</div>
            )}
            <p className="logement-description">{logement.location}</p>
          </div>

          <div className="tag-div">
            {logement.tags.map((tag) => (
              <div key={tag} className="tag-item">
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="rating-host-div">
          <div className="host-div">
            <div className="host-name">{logement.host.name}</div>
            <img
              src={logement.host.picture}
              alt="host-picture"
              className="host-picture"
            />
          </div>
          <Rating value={logement.rating} />
        </div>
      </div>

      <ul className="logement-collapse-item">
        <KasaValueItem
          className="logement-menu"
          valeur={{
            name: 'Description',
            description: logement.description,
          }}
        />
        <KasaValueItem
          className="logement-menu"
          valeur={{
            name: 'Equipements',
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
    </div>
  );
}
