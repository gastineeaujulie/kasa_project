import logoblanc from '../assets/logoblanc.svg';
import '../styles/Footer.scss';

export default function Footer() {
  return (
    <div className="footer-container">
      <img src={logoblanc} alt="Kasa logo" className="footer-logo" />
      <p className="footer-text">© 2024 Kasa. All rights reserved</p>
    </div>
  );
}
