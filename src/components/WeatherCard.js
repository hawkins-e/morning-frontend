import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const WeatherCard = (props) => (
    
  <Card>
    <Image src= 'https://images.pexels.com/photos/1769317/pexels-photo-1769317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
      City: {props.city}
      </Card.Meta>
      <Card.Description>
       Temperature:  {props.temperature}
      </Card.Description>
      <Card.Description>
       Feels Like:  {props.feels_like}
      </Card.Description>
      <Card.Description>
       Humidity:  {props.humidity}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default WeatherCard