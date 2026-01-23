import { Link } from 'react-router-dom';
import '../styles/ErrorPage.scss';

export default function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error-title">404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <div className="back-home">
        <Link to="/" className="back-home-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}
