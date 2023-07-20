import React from "react";
import productImage from "../images/casa-lago.png"
import './productos.css'
import izquierdaIcon from "../images/button/left.svg"
import derechaIcon from "../images/button/right.svg";
function Product() {
    return (
      <aside>
        <article className="section3 container-fluid" id="products">
          <div className="section3__background"></div>
          <div className="section3__white"></div>
          <div className="section3__gray"></div>
          <div className="section3__image-container">
            <img src={productImage} alt="Product" className="section3__image" />
            <div className="section3__orange-square">
              <div>Sed ut perspiciatis</div>
              <div>Nemo Enim</div>
              <div>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </div>
            </div>
            <div className="section3__arrow-container">
              <button className="section3__arrow-button">
                <img
                  src={izquierdaIcon}
                  alt="Izquierda"
                  className="section3__arrow-icon"
                />
              </button>
              <button className="section3__arrow-button">
                <img
                  src={derechaIcon}
                  alt="Derecha"
                  className="section3__arrow-icon"
                />
              </button>
            </div>
          </div>
        </article>
      </aside>
    );
  }

export default Product;
