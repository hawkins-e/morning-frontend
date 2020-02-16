import React from "react";
import WeatherCard from "./WeatherCard"

const URL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=a6e35c880dc001c17f77b139faa03bd8&units=imperial"


class WeatherContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      isLoading: false
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          weather: data,
          hows_it_look: data.weather["0"]['main'],
          city: data.name, 
          temperature: data.main.temp, 
          feels_like: data.main.feels_like,
          humidity: data.main.humidity, 
          isLoading: false
        });
      });
  }


    render() {
      // console.log("DEBUG RENDER", this.state.divvyStation)
      let renderContent;
      if (this.state.isLoading) {
        renderContent = <div> Is Loading... </div>;   
      } else {    
        renderContent = (
          <div>
            <WeatherCard 
            city={this.state.city}
            hows_it_look={this.state.hows_it_look}
            temperature={this.state.temperature}
            feels_like={this.state.feels_like}
            humidity ={this.state.humidity}
            /> 
          </div>
        );
      }
      return renderContent;
    }
}

export default WeatherContainer 
