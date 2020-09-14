import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Ciudad" />

      <input type="text" name="country" placeholder="País" />


      <button >Enviar</button>
    </form>
  );
};

export default Form;
