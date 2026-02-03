import '../styles/LogementItem.scss';
import { Link } from 'react-router-dom';

export default function LogementItem(logement) {
  return (
    <li className="logement-item">
      <Link to={`/logement/${logement.id}`} className="logement-item-link">
        <img
          className="logement-item-cover"
          src={logement.cover}
          alt={`${logement.title} cover`}
        />
        {logement.title && (
          <div className="logement-item-title">{logement.title}</div>
        )}
      </Link>
    </li>
  );
}
