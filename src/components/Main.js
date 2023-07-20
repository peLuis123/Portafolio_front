import React from 'react';
import Inicio from './inicio/inicio.js'
import About from './about/about'
import Productos from './productos/productos';
import Services from './services/services.js';
import Contacto from './contact/contac.js';
import Footer from './footer/footer.js';
const Main = ({ activeSection }) => {

    return (
        <main className="main" style={{ padding: '0px' }}>
            <section id="Inicio" className={`section ${activeSection === 'Inicio' ? 'active' : ''}`}>
            <Inicio/>
            </section>
            <section id="about" className={`section ${activeSection === 'about' ? 'active' : ''}`}>
            <About/>
            </section>
            <section id="Productos" className={`section ${activeSection === 'Productos' ? 'active' : ''}`}>
                <Productos/>
            </section>
            <section id="Services" className={`section ${activeSection === 'Services' ? 'active' : ''}`}>
                <Services/>
            </section>
            <section id="Contacto" className={`section ${activeSection === 'Contacto' ? 'active' : ''}`}>
                <Contacto/>
            </section>
            <section>
                <Footer/>
            </section>
        </main>
    );
};

export default Main;
