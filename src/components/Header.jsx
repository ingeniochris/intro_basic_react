import React, { Fragment } from "react";

//funcion estandar en React -Function Declaration
function Header({ title }) {
  //extraemos con Destructuring el props.title

  //Antes del return puedes escribir variables para utilizar dentro del return
  const age = 15;
  let message = "";
  if (age >= 18) {
    message = "Eres mayor de edad";
  } else {
    message = "Eres menor de edad";
  }

  return (
    <Fragment>
      <h1>{title}</h1>
      <p>{message}</p>
    </Fragment>
  );
}

export default Header;
