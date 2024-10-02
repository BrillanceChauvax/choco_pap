import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
   <footer>
    <div className="footer-container">
            <div className="footer-section choco-pap">
                <h3>Choco Pap</h3>
                <p>Découvrez nos délicieuses pâtisseries artisanales faites avec amour et passion. Une tradition depuis maintenant plus de 20 ans, et ce n'est pas prêt de s'arrêter !</p>
            </div>
            <div className="footer-section">
                <h3>Contact</h3>
                <p>Adresse: 51 Rue du Chocolat 75000 Paris</p>
                <p>Téléphone: 01 23 45 67 89</p>
                <p>Horaires: 9h00-17h00 du Lundi au Vendredi</p>
            </div>
            <div className="footer-section social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="../img/facebook.svg" title="Facebook" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="../img/instagram.svg" title="Instagram" alt="Instagram" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="../img/x-twitter.svg" title="X" alt="Twitter" />
                </a>
            </div>
    </div> 
   </footer> 
  );
}

export default Footer;
