import '../styles/LogementItem.scss';

export default function LogementItem(logement) {
  return (
    <li key={logement.id} className="logement-item">
      <img
        className="logement-item-cover"
        src={logement.cover}
        alt={`${logement.title} cover`}
      />
      {logement.title && (
        <div className="logement-item-title">{logement.title}</div>
      )}
    </li>
  );
}
