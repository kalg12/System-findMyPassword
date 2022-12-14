/* eslint-disable eqeqeq */
import React, {useEffect} from "react";
import "../styles/styles.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
const API = 'https://backend-system-findmypassword.onrender.com/'

const Form = () => {

    const MySwal = withReactContent(Swal)

    const getCurp = (event) => {
        event.preventDefault();
        const curp = document.getElementById("curp").value;
        return curp;
    }

    const validateCurp = (event) => {
      event.preventDefault();
      const curp = getCurp(event);

      if (curpValida(curp)) {

      const getData = async () => {
        const curp = getCurp(event);
        const response = await fetch(`${API}${curp}`);
        const data = await response.json();
        return {
          correo: data[0].correo,
          contrasenia: data[0].contrasenia
        }
      }

      getData().then((data) => {
        MySwal.fire({
          title: 'CURP Válida',
          text: `La CURP ingresada es válida, tus datos de acceso a la plataforma son:
          email: ${data.correo}
          contraseña: ${data.contrasenia}
          `,
          icon: 'success',
          confirmButtonText: 'Aceptar'
      })
      })

      } else {
          MySwal.fire({
              title: 'CURP Inválida',
              text: 'La CURP ingresada es inválida',
              icon: 'error',
              confirmButtonText: 'Aceptar'
          })
      }
  }

    function curpValida(curp) {
        let re =
            /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
          validado = curp.match(re);
        if (!validado)
          //Coincide con el formato general?
          return false;
        //Validar que coincida el dígito verificador
        function digitoVerificador(curp17) {
          //Fuente https://consultas.curp.gob.mx/CurpSP/
          let diccionario = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
            lngSuma = 0.0,
            lngDigito = 0.0;
          for (let i = 0; i < 17; i++)
            lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
          lngDigito = 10 - (lngSuma % 10);
          if (lngDigito == 10) return 0;
          return lngDigito;
        }
        if (validado[2] != digitoVerificador(validado[1])) return false;
        return true; //Validado
      }

    useEffect(() => {
        const curp = document.getElementById("curp");
        curp.addEventListener("keyup", () => {
            curp.value = curp.value.toUpperCase();
        });
    }, []);

  return (
    <>
      <div className="container">
        <h1>Formulario</h1>
        <form>
          <label>
            CURP:
            <input type="text" name="curp" id="curp"/>
          </label>
          <input type="submit" value="Enviar" onClick={getCurp && validateCurp} />
        </form>
      </div>
    </>
  );
};

export default Form;