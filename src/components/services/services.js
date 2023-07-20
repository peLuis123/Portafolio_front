import React, { useState } from "react";
import serviceImage from "../images/Corredor.png";
import "./services.css";
import arrowUpIcon from "../images/button/acordion-up.svg";
import arrowDownIcon from "../images/button/acordion-down.svg";
function Services () {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <aside>
            <article className="section4 container-fluid" id="services">
                <div className="section4__white"></div>
                <div className="section4__image-container">
                    <img src={serviceImage} alt="Service" className="section4__image" />
                </div>
                <div className="accordion-container">
                    <div
                        className={`accordion-item ${activeAccordion === 0 ? "active" : ""
                            }`}
                        onClick={() => toggleAccordion(0)}
                    >
                        <h3 className="accordion-title">Sed ut perspiciatis</h3>
                        <div className="accordion-content">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et
                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </div>
                        <img
                            src={activeAccordion === 0 ? arrowUpIcon : arrowDownIcon}
                            alt="Toggle"
                            className="accordion-arrow"
                        />
                    </div>
                    <div
                        className={`accordion-item ${activeAccordion === 1 ? "active" : ""
                            }`}
                        onClick={() => toggleAccordion(1)}
                    >
                        <h3 className="accordion-title">Ut enim ad minima veniam</h3>
                        <div className="accordion-content">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et
                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </div>
                        <img
                            src={activeAccordion === 0 ? arrowUpIcon : arrowDownIcon}
                            alt="Toggle"
                            className="accordion-arrow"
                        />
                    </div>
                    <div
                        className={`accordion-item ${activeAccordion === 2 ? "active" : ""
                            }`}
                        onClick={() => toggleAccordion(2)}
                    >
                        <h3 className="accordion-title">Sit amet, consectetur, adipisci</h3>
                        <div className="accordion-content">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et
                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </div>
                        <img
                            src={activeAccordion === 0 ? arrowUpIcon : arrowDownIcon}
                            alt="Toggle"
                            className="accordion-arrow"
                        />
                    </div>
                </div>
            </article>
        </aside>
    );
}
export default Services;
