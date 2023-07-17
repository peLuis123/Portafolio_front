import React, { useState, useEffect } from "react";
import "./inicio.css";

const Inicio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://somoskudasai.net/wp-content/uploads/2020/06/portada_one-piece-8-1.jpg",
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2013/09/251389-imagenes-one-piece-unlimited-world-r.jpg?itok=vUHPCX33",
        "https://1.bp.blogspot.com/-6c3QLuQw-Ug/YPMkxb_HOLI/AAAAAAABL_g/IWdBpKc269kOfVwt_LdmbxNPCEaiCvJIQCLcBGAsYHQ/s1024/opT3.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <div className="carousel" >
            <div className="carousel-overlay" style={{ padding: '0px' }}>
                <h1 className="carousel-title">Título del Carrusel</h1>
                <p className="carousel-description">
                    Este es un resumen de máximo 20 palabras sobre la imagen.
                </p>
            </div>

            <div className="carousel-dots">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="carousel-image"
            />
        </div>
    );
};

export default Inicio;
