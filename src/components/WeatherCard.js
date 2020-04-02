import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const WeatherCard = (props) => (
  <div>
    <Image src= "https://images.pexels.com/photos/2093318/pexels-photo-2093318.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" fluid />
    <br></br>
    <Card.Content >
      <Card.Meta>
       <h3 style={{fontFamily: 'Noto Serif'}}> City: {props.city}</h3>
      </Card.Meta>
      <br></br>
      <Card.Description >
       <h2  style={{fontFamily: 'Noto Serif'}}>Temperature:  {props.temperature}°</h2>
      </Card.Description>
      <br></br>
      <Card.Description>
       <h2 style={{fontFamily: 'Noto Serif'}}> Feels Like:  {props.feels_like}°</h2>
      </Card.Description>
      <br></br>
      <Card.Description>
       <h2 style={{fontFamily: 'Noto Serif'}}> Humidity:  {props.humidity}%</h2>
      </Card.Description>
    </Card.Content>
  </div>
)

export default WeatherCard