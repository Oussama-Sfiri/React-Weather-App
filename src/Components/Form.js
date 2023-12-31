import React from 'react';

function Form(props) {
  return (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Enter City..."/>
        <input type="text" name="country" placeholder="Enter Country..."/>
        <button>Get Weather</button>
    </form>
  );
};

export default Form;