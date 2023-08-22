import React, { Component } from 'react';
import Form from './Components/Form';
import Weather from './Components/Weather';

export class App extends Component {
  state = {
    temperature : "",
    city : "",
    country : "",
    humidity : "",
    description : "",
    windSpeed : "",
    pressure : "",

    isGetWeatherClicked : false,
  }; // isGetWeatherClicked est une state variable qui sert à savoir est-ce-que l'user à clicker sur le btn getWeather ou non

// API_URL = http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
  getWeather = async (e) => {
    e.preventDefault();
    const API_KEY = 'e36ed364400282e43250b6c4c0274d44'; // API id
    const city = e.target.elements.city.value; // "e.target = <form>" et "e.target.elements = tout les elements du <form>" et "e.target.elements.city = l'element du form qui a l'atrribut (name="city") dans ce c'est l'input li ghaydekhel fih l'user le nom de la ville" et finalement on stock la value saisie par l'user dans cette input dans la variable "city" bach nkhedmo fiha f l'API bach nfetchiw les infos dyl lweather dyl city ou lcoutry li dekhel l'user fles inputs
    const country = e.target.elements.country.value; // "e.target = <form>" et "e.target.elements = tout les elements du <form>" et "e.target.elements.country = l'element du form qui a l'atrribut (name="country") dans ce c'est l'input li ghaydekhel fih l'user le nom du pays" et finalement on stock la value saisie par l'user dans cette input dans la variable "country" bach nkhedmo fiha f l'API bach nfetchiw les infos dyl lweather dyl city ou lcoutry li dekhel l'user fles inputs
    if (city !== "" && country !== "") { // si l'user dekhel city et coutry fles inputs çàd makhelach les inputs khawyin

      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&units=metric&appid=${API_KEY}`); // fetching data or response | we can do this : const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`).then((res) => res.json());
      const data = await res.json(); // converting response or the data to a json format
      this.setState({
        temperature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        windSpeed : data.wind.speed,
        pressure : data.main.pressure,

        isGetWeatherClicked : true,
      }); // ici puisque l'user a clicker sur le btn get Weather donc on set la state variable "isGetWeatherClicked" par "true"

    }else{
      window.alert("Please enter City & Country to get weather");
    };
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <h1>Weather App</h1>
          <Form getWeather={this.getWeather}/>
          <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              windSpeed={this.state.windSpeed}
              pressure={this.state.pressure}

              isGetWeatherClicked={this.state.isGetWeatherClicked}
          />
        </div>
      </div>
    );
  };
};

export default App;