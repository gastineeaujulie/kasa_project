import { useState } from 'react';
import vector from '../assets/vector.svg';
import '../styles/Carrousel.scss';

export default function Carrousel({ pictures, title }) {
  const [index, setIndex] = useState(0);
  const total = pictures.length;

  const prevImage = () => {
    setIndex(index === 0 ? pictures.length - 1 : index - 1);
  };

  const nextImage = () => {
    setIndex(index === pictures.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="carrousel">
      {total > 1 && (
        <div className="btn-group-carrousel">
          <button onClick={prevImage} className="btn-carrousel">
            <img
              src={vector}
              alt="image precedente"
              className="previous-icone"
            />
          </button>
          <button onClick={nextImage} className="btn-carrousel">
            <img src={vector} alt="image suivante" className="next-icone" />
          </button>
        </div>
      )}
      <img
        src={pictures[index]}
        alt={`${title} - ${index}`}
        className="logement-picture"
      />
      {total > 1 && (
        <span className="carrousel-counter">
          {index + 1}/{total}
        </span>
      )}
    </div>
  );
}
