import React from "react";

const Weather = props => (
        <div className="weather__info">
            {
                props.error && <p className="weather__key">
                    <span> {props.error}</span>
                    </p>
            }
            {
                props.city && <p className="weather__key">Miejscowość:
                     <span> {props.city}</span>
                </p>
            }
            {
                props.description && <p className="weather__key">Warunki:
                    <span> {props.description}</span>
                    </p>
            }
            {
                props.temperature && <p className="weather__key">Temperatura:
                    <span> {props.temperature}*C</span>
                    </p>
            }
            {
                props.humidity && <p className="weather__key">Wilgotność:
                    <span> {props.humidity}%</span>
                    </p>
            }
        </div>
    );

export default Weather;