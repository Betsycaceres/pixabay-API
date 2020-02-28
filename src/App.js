import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";

function App() {
  const [busqueda, guardarBusqueda] = useState("");

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 30;
      const key = "15417249-cef27a0691844408d2b2ac95b";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarBusqueda(resultado.hits);
    };
    consultarApi();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotrom">
        <p className="lead text-center">Buscador de imágenes</p>
        <Formulario guardarBusqueda={guardarBusqueda}></Formulario>
      </div>
    </div>
  );
}

export default App;
