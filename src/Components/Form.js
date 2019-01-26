import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Miasto..."/>
        <button>Pobierz pogodę</button>
    </form>
);

export default Form;