import React, { useState, useEffect } from "react";
import "./inicio.css";
import bicicletaImage1 from "../images/bicicleta.png";
import bicicletaImage2 from "../images/casa-lago.png";
import bicicletaImage3 from "../images/contact.png";
import Header from '../header/header';

const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [bicicletaImage1, bicicletaImage2, bicicletaImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel" id="home">
      <Header></Header>
      <div className="carousel-overlay" style={{ padding: "0px" }}>
        <div className="carousel-content">
          <h1 className="carousel-title">Sed ut perspiciatis unde omnis iste natus</h1>
          <p className="carousel-description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
          </p>
          <button className="readmore-btn">Read more</button>
        </div>
        <div className="carousel-dots">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
    </div>
  );
};

export default Inicio;
