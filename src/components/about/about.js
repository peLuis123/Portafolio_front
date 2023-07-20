import React from "react";
import "./about.css"; // Asegúrate de tener un archivo CSS para los estilos del componente "About"

function About(){
    return(
        <aside>
        <article class="section2 container-fluid" id="about">
            <section class="section2__container">
                <div class="section2__container__texto">
                    <h2 class="section2__titulo">
                        <span>We Help Businesses</span>
                        Grow and Innovate
                    </h2>
                    <p class="section2__texto container-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                </div>
            </section>
        </article>
        </aside>
    );
}
export default About;
