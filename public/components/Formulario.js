import React from "react";
const Formulario = () => {
  <form>
    <div className="row">
      <div className="form-group col-md-8">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Buscar una imagen, ejempli futbol o café"
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
  </form>;
};

export default Formulario;
