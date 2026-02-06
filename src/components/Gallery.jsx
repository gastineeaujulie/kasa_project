import LogementItem from '../components/LogementItem';
import '../styles/Gallery.scss';

export default function Gallery({ logements }) {
  return (
    <div className="logements-list">
      {logements.map((logement) => (
        <LogementItem
          key={logement.id}
          id={logement.id}
          cover={logement.cover}
          title={logement.title}
        />
      ))}
    </div>
  );
}
