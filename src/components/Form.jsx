import React from "react";
import "../styles/styles.css";

const Form = () => {
  return (
    <>
      <div className="container">
        <h1>Formulario</h1>
        <form>
          <label>
            CURP:
            <input type="text" name="curp" />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};

export default Form;
