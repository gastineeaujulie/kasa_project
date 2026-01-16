export default function LogementItem(logement) {
  return (
    <li key={logement.id} className="logement-item">
      <img
        className="logement-img"
        src={logement.cover}
        alt={logement.description}
      />
      <p className="logement-title">{logement.title}</p>
    </li>
  );
}
