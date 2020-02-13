import React from 'react'
import { Card,Image } from 'semantic-ui-react'

const DivvyCard = (props) => (
  <Card>
    <Image src= 'https://d21xlh2maitm24.cloudfront.net/chi/DivvyLogo_p_v2.svg?mtime=20170608140727' wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
        Station: Clark & Elm 
      </Card.Meta>
      <br></br>
      <Card.Description>
      <h4>Bikes Available: {props.getStation('183').num_bikes_available}</h4>
      <h4>Docks Available: {props.getStation('183').num_docks_available}</h4>
      </Card.Description>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Card.Content>
  </Card>
)

export default DivvyCard