import React, { useState } from "react";
import "./contac.css";
import foto from "../images/contact.png";
function Contact(){
    const [data, setData] = useState(null);
    const guardarContanto = (nombre,correo,telefono,mensaje) =>{
        const url = "https://apicontact-production-9497.up.railway.app/contactos"
        fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                mensaje:mensaje,

            })
        })
        .then(response => response.json())
        .then(json => {
            console.log("json",json)
            setData(json)
        }).catch(err => {
            console.log("e",err)
        })
    }
    const enviarCorreo = (nombre,correo,mensaje) =>{
        console.log("Datos a enviar:", nombre,",", correo,",", mensaje);
        const url = "https://apicontact-production-9497.up.railway.app/contact"
        fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                nombre: nombre,
                email: correo,
                message:mensaje,

            })
        })
        .then(response => response.json())
        .then(json => {
            console.log("Respuesta del servidor:", json);
            setData(json)
        }).catch(err => {
            console.log("Error al enviar la solicitud:", err)
        })
    }
    const handleEnviar = () => {
        // Obtén los valores de los campos
        const nombre = document.getElementById("name").value;
        const correo = document.getElementById("email").value;
        const telefono = document.getElementById("phone").value;
        const mensaje = document.getElementById("message").value;
        //console.log(nombre, correo, telefono, mensaje)
        // Llama a la función guardarContanto con los valores
        guardarContanto(nombre, correo, telefono, mensaje);
        enviarCorreo(nombre, correo, mensaje);
      };
    return(
        <div class="formulario_globo">
                <div class="formulario_globo__form" id="contact">
                    <div class="formulario_globo__content">
                        <h4 class="formulario_globo__content__h4">Get in touch <span>We are hiring!</span></h4>
                        <div id="formulario" class="formulario_globo__content__form">
                            <form class="formulario_globo__content__form__contact" action="contacto.php" method="POST">
                                <div class="formulario_globo__form__in">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" id="name" class="formulario_globo__form__input" required/>
                                </div>
                                <div class="formulario_globo__form__in">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" id="email" class="formulario_globo__form__input" required/>
                                </div>
                                <div class="formulario_globo__form__in">
                                    <label for="phone">Phone</label>
                                    <input type="number" name="phone" id="phone" class="formulario_globo__form__input" required/>
                                </div>
                                <div class="formulario_globo__form__in">
                                    <label for="message">Message</label>
                                    <textarea class="formulario_globo__content_textarea" id="message"></textarea>
                                </div>
                                <div class="formulario_globo__content_boton">
                                    <button type="button" class="boton" onClick={handleEnviar}>Send</button>
                                </div>
                            </form>
                        </div>
                        <img className="imgContact" src={foto} width="700" height="500
                        "></img>
                    </div>

                </div>
            </div>
    );
}
export default Contact;
