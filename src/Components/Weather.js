import React, { Fragment } from 'react';

function Weather(props) {
  return (
    <Fragment>
        { props.isGetWeatherClicked &&
         (<div className="info">
            <p className="info-key">Description : <span className="info-value">{props.description}</span></p>
            <p className="info-key">City : <span className="info-value">{props.city}</span></p>
            <p className="info-key">Country : <span className="info-value">{props.country}</span></p>
            <p className="info-key">Temperature : <span className="info-value">{props.temperature} °C</span></p>
            <p className="info-key">Humidity : <span className="info-value">{props.humidity}%</span></p>
            <p className="info-key">Wind Speed : <span className="info-value">{props.windSpeed} m/s</span></p>
            <p className="info-key">Pressure : <span className="info-value">{props.pressure} hPa</span></p>
        </div>)
        }
    </Fragment> //si isGetWeatherClicked == "true" on affiche le div qui porte les infos du weather sinon on affiche rien
  );
};

export default Weather;