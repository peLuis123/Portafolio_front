import React from "react";
import "./header.css";
import logo from "../images/top-logo.png";


function Header(){
    return(
    <div class="contenedor-menu">
    <header>
        <nav class="nav_menu" >
            <div class="container-fluid top_logo">
                <img src={logo}  alt="Logo top 25 Watts " class="imgLogo"></img>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar_link" id="navbarNav">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <a href="#home" class="nav-link active" aria-current="page">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#products" class="nav-link">Products</a>
                    </li>
                    <li class="nav-item">
                        <a href="#services" class="nav-link">Services</a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</div>);
}
export default Header;
