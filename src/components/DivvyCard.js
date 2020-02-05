import React from 'react'
import { Card,Image } from 'semantic-ui-react'

const DivvyCard = (props) => (
  <Card>
    <Image src= 'https://d21xlh2maitm24.cloudfront.net/chi/DivvyLogo_p_v2.svg?mtime=20170608140727' wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
      </Card.Meta>
      <Card.Description>
      Bikes Available: {props.getStation('183').num_bikes_available}
      <br></br>
      Docks Available: {props.getStation('183').num_docks_available}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default DivvyCard