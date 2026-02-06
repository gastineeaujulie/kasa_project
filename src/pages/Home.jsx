import homepage from '../assets/homepage.webp';
import '../styles/Home.scss';
import Gallery from '../components/Gallery.jsx';
import logements from '../data/logements.json';

export default function Home() {
  return (
    <>
      <div className="home-banner">
        <img
          src={homepage}
          alt="paysage montagneux au bord de l'ocean"
          className="home-img"
        />
        <h1 className="home-title">Chez vous, partout et ailleurs</h1>
      </div>
      <div>
        <Gallery logements={logements} />
      </div>
    </>
  );
}
