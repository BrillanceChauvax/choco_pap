import React, { useState, useEffect } from 'react';
import './Caroussel.css';


const Carousel = () => {
    // State pour l'index de l'image actuelle
    const [currentIndex, setCurrentIndex] = useState(0);

    // Images du carrousel
    const slides = [
        "../img/accueil1.jpg",
        "../img/accueil2.jpg",
        "../img/accueil3.jpg"
    ];

    // Gestion du changement automatique d'image'
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % slides.length); // Passe à l'image suivante toutes les 3 secondes
        }, 5000);
        return () => clearInterval(interval); // Nettoyage lors du démontage
    }, [currentIndex, slides.length]);

    // Fonction pour afficher une slide spécifique via les indicateurs
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <img src={slide} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <div className="carousel-content">
                <h1>CHOCO PAP</h1>
                <a href="#boutique" className="carousel-btn">VOIR LA BOUTIQUE</a>
            </div>
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    )};

export default Carousel