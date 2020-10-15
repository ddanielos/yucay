import React from 'react';
import logo from  '../assets/static/logo.png';
import '../assets/styles/components/EnConstruccion.styl';


const EnConstruccion = () => {
   return(
      <div className="container">
         <header>
            <h1>Yucay Brewery</h1>
         </header>

         <section className="contenido">
            <img src={logo} alt="cerveceria yucay brewery" />
         </section>

         <footer>
            <h2>Estamos cocinando una nueva experiencia...</h2>
            <p>Escríbenos a: <a href="mailto:contacto@yucaybrew.com">contacto@yucaybrew.com</a></p>
         </footer>
      </div>
   )
};

export default EnConstruccion;
