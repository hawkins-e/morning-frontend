import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const WeatherCard = () => (
  <Card>
    <Image src= 'https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
      </Card.Meta>
      <Card.Description>
       Weather Stuff Here 
      </Card.Description>
    </Card.Content>
  </Card>
)

export default WeatherCard