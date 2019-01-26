import React, {Component} from "react";
import {Line} from 'react-chartjs-2';


const Chart = props => (

    <div>
        <p class="forecast-container__subtitle weather__key">Prognoza pogody...</p>


        <Line
            data={{
                labels: [...props.forecast_date],
                datasets: [{
                    data: [...props.forecast_temp],
                    label: "Temperatura [*C]",
                    borderColor: "orange",
                    fill: false
                }]
            }}
            options={{
                title: {
                    display: true,
                }
            }}
        />
    </div>
);

export default Chart;