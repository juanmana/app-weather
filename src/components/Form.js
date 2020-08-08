import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getWheather}>
      <input type="text" name="city" placeholder="City" />

      <input type="text" name="country" placeholder="Country" />


      <button >Submit</button>
    </form>
  );
};

export default Form;
