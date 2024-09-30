import './Footer.css';

function Footer() {
  return (
   <footer>
    <div class="footer-container">
            <div class="footer-section choco-pap">
                <h3>Choco Pap</h3>
                <p>Découvrez nos délicieuses pâtisseries artisanales faites avec amour et passion. Une tradition depuis maintenant plus de 20 ans, et ce n'est pas prêt de s'arrêter !</p>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p>Adresse: 51 Rue du Chocolat 75000 Paris</p>
                <p>Téléphone: 01 23 45 67 89</p>
                <p>Horaires: 9h00-17h00 du Lundi au Vendredi</p>
            </div>
            <div class="footer-section social">
                <a href="www.facebook.com" target='_blank'><img src="../img/facebook.svg" title="Facebook" alt="Facebook"/></a>
                <a href="www.instagram.com" target='_blank'><img src="../img/instagram.svg" title="Instagram" alt="Instagram"/></a>
                <a href="www.twitter.com" target='_blank'><img src="../img/x-twitter.svg" title="X" alt="Twitter"/></a>
            </div>
    </div> 
   </footer> 
  );
}

export default Footer;
