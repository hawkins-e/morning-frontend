import React from 'react'
import { Card } from 'semantic-ui-react'

const WeatherCard = (props) => (
    
  <Card>
    <img height={150} src= 'https://images.pexels.com/photos/1209982/pexels-photo-1209982.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' wrapped ui={true} />
    <Card.Content >
      <Card.Meta>
      <h3>City: {props.city}</h3>
      </Card.Meta>
      <br></br>
      <Card.Description height={400}>
       <h3>Weather: {props.hows_it_look}</h3>
      </Card.Description>
      <br></br>
      <Card.Description>
       <h3>Temperature: {Math.round(props.temperature)}°</h3>
      </Card.Description>
      <br></br>
      <Card.Description>
       <h3>Feels Like:  {Math.round (props.feels_like)}°</h3>
      </Card.Description>
      <br></br>
      <Card.Description>
       <h3>Humidity:  {Math.round (props.humidity)}%</h3>
      </Card.Description>
    </Card.Content>
  </Card>
)

export default WeatherCard