import etoile from '../assets/etoile.svg';
import '../styles/Rating.scss';

export default function Rating({ value }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          src={etoile}
          className={`star ${star <= value ? 'filled' : ''}`}
          alt="rating-star"
        ></img>
      ))}
    </div>
  );
}
