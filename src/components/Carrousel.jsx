import { useState } from 'react';
import vector from '../assets/vector.svg';

export default function carrousel({ pictures, title }) {
  const [Img, previousImg] = useState(0);

  return (
    <div>
      <button onClick={() => previousImg(Img[-1])}>
        {' '}
        <img src={vector} alt="vector-icone" className="about-icone" />
      </button>
      <img
        src={pictures}
        alt={`${title} pictures`}
        className="logement-pictures"
      />
    </div>
  );
}
