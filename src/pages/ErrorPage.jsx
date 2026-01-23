export default function ErrorPage() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <div className="back-home">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
}
