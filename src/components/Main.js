import React from 'react';
import Inicio from './inicio.js'

const Main = ({ activeSection }) => {

    return (
        <main className="main" style={{ padding: '0px' }}>
            <section id="yo" className={`section ${activeSection === 'yo' ? 'active' : ''}`}>

            <Inicio/>
            </section>
            <section id="proyectos" className={`section ${activeSection === 'proyectos' ? 'active' : ''}`}>
                <h2>Proyectos</h2>
                {/* Contenido de la sección "Proyectos" */}
            </section>
            <section id="contacto" className={`section ${activeSection === 'contacto' ? 'active' : ''}`}>
                <h2>Contacto</h2>
                {/* Contenido de la sección "Contacto" */}
            </section>
        </main>
    );
};

export default Main;
