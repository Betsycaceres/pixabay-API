import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ guardarBusqueda }) => {
  const [termino, guardarTermino] = useState("");
  const [error, guardarError] = useState(false);

  const buscarImagenes = e => {
    e.preventDefault();
    // validar
    if (termino.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    // enviar el término de búsqueda
    guardarBusqueda(termino);
  };

  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Buscar una imagen, ejemplo futbol o café"
            onChange={e => guardarTermino(e.target.value)}
          ></input>
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            placeholder="Buscar una imagen, ejemplo futbol o café"
          ></input>
        </div>
      </div>
      {error ? <Error mensaje="Agrega término de búsqueda"></Error> : null}
    </form>
  );
};

export default Formulario;
