import React, { useState, useEffect, Fragment } from "react";
import Navbar from "./components/Navbar";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/Listadoimagenes";
import Footer from "./components/Footer";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 40;
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

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    if (nuevaPaginaActual === 0) return;
    guardarPaginaActual(nuevaPaginaActual);
  };

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    if (nuevaPaginaActual > totalpaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
  };

  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="container  ">
        <div className="jumbotrom">
          <h1 className="font-weight-bold text-center mt-5 mb-4">
            Buscador de imágenes
          </h1>
          <Formulario guardarBusqueda={guardarBusqueda}></Formulario>
        </div>
        <div className="row justify-content-center">
          <ListadoImagenes imagenes={imagenes}></ListadoImagenes>
          <button
            type="button"
            className="btn btn-dark mr-1"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        </div>
        <Footer></Footer>
      </div>
    </Fragment>
  );
}

export default App;
