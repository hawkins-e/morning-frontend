import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const WeatherCard = (props) => (
    
  <Card>
    <Image src= 'https://images.pexels.com/photos/1209982/pexels-photo-1209982.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
      City: {props.city}
      </Card.Meta>
      <br></br>
      <Card.Description>
       <h4>Temperature:  {props.temperature}°</h4>
      </Card.Description>
      <br></br>
      <Card.Description>
       <h4>Feels Like:  {props.feels_like}°</h4>
      </Card.Description>
      <br></br>
      <Card.Description>
       <h4>Humidity:  {props.humidity}%</h4>
      </Card.Description>
    </Card.Content>
  </Card>
)

export default WeatherCard