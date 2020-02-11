import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CtaCard = (props) => (
  <Card>
    <Image src= 'https://www.transitchicago.com/cms/images/layout/logo.png' wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
        Bus Stop:{props.station_name}  
      </Card.Meta>
        <Card.Description>
        Next Bus in {props.eta}  minutes
        <br></br>
        2nd Bus: {props.second_eta} minutes 
        </Card.Description>
    </Card.Content>
  </Card>
)

export default CtaCard 