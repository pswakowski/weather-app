import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import Chart from "./Components/Chart";

const API_KEY = "9d5f79d716868caba384bbc7696fea07";

class App extends React.Component {

  state = {
      temperature: undefined,
      city: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      forecast_date: [],
      forecast_temp: [],
  };

  getWeather = async (e) => {
      e.preventDefault();

      const city = e.target.elements.city.value;


      if (city) {

          const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

          const data = await api_call.json();

          const api_call2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);

          const data2 = await api_call2.json();

          const forecast_list = data2.list;

          if (forecast_list) {

              var forecast_date = forecast_list.map(function (item, index, array) {
                  return item.dt_txt;
              });

              var forecast_temp = forecast_list.map(function (item, index, array) {
                  return item.main.temp;
              });

              this.setState(
                  {
                      temperature: data.main.temp,
                      city: data.name,
                      humidity: data.main.humidity,
                      description: data.weather[0].description,
                      error: "",
                      forecast_date: forecast_date,
                      forecast_temp: forecast_temp,
                  }
              );
          } else {
              this.setState(
                  {
                      temperature: undefined,
                      city: undefined,
                      humidity: undefined,
                      description: undefined,
                      error: "Podałeś złą nazwę miejscowości",
                      forecast_date: [],
                      forecast_temp: [],
                  }
              );
          }
      } else {
          this.setState(
              {
                  temperature: undefined,
                  city: undefined,
                  humidity: undefined,
                  description: undefined,
                  error: "Proszę podaj nazwę miejscowośći!",
                  forecast_date: [],
                  forecast_temp: [],
              }
          );
      }
  };

  render() {
    return (
        <div>
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 title-container">
                                <Titles />
                            </div>
                            <div className="col-sm-7 form-container">
                                <Form getWeather={this.getWeather}/>
                                <Weather
                                    temperature={this.state.temperature}
                                    humidity={this.state.humidity}
                                    city={this.state.city}
                                    country={this.state.country}
                                    description={this.state.description}
                                    error={this.state.error}
                                />
                            </div>

                        </div>
                        <div className="row chart-container">
                            <div className="col-sm-12">
                                    { this.state.forecast_temp.length > 0 && <Chart
                                        forecast_date={this.state.forecast_date}
                                        forecast_temp={this.state.forecast_temp}
                                    /> }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;