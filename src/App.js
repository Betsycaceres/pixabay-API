import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/Listadoimagenes";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardaPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 30;
      const key = "15417249-cef27a0691844408d2b2ac95b";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);
      // calculando el total de las páginas

      const calcularTotalPaginas = Math.ceil(
        resultado.totalHits / imagenesPorPagina
      );
      guardarTotalPaginas(calcularTotalPaginas);
    };
    consultarApi();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotrom">
        <p className="lead text-center">Buscador de imágenes</p>
        <Formulario guardarBusqueda={guardarBusqueda}></Formulario>
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes}></ListadoImagenes>
        <button type="button" className="bbtn btn-info mr-1">
          Anterior &laquo;
        </button>
        <button type="button" className="bbtn btn-info ">
          Siguiente &raquo;
        </button>
      </div>
    </div>
  );
}

export default App;
