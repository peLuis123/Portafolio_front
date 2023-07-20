import React from "react";
import "./contac.css";
import contactImage from "../images/bicicleta-menor-resolucion.png"
function Contacto () {
    return (
        <section className="contact-container">
            <div className="contact-left">
                <h2 className="contact-title">Get in touch</h2>
                <p>We are hiring!</p>
                <form className="contact-form">
                    <div className="form-group">

                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">

                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">

                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                    </div>
                    <div className="form-group">

                        <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="contact-right">
                {/* Contenedor para el fondo gris */}
                <div className="contact-image-container">
                    <img src={contactImage} alt="Contact Image" className="contact-image" />
                </div>
                <div className="contact-right-gray"></div>
            </div>
        </section>
    );
}

export default Contacto;
