import React from 'react'
import { Card,} from 'semantic-ui-react'

const DivvyCard = (props) => (
  <Card>
    <img  height={150} src= 'https://www.motivateco.com/wp-content/uploads/2017/08/DivvyLogo_p.png' wrapped ui={false} />
    <Card.Content >
      <Card.Meta>
        <h3> Station: Clark & Elm </h3>
      </Card.Meta>
      <br></br>
      <Card.Description height={400}>
      <h3>Bikes Available: {props.getStation('183').num_bikes_available}</h3>
      <h3>Docks Available: {props.getStation('183').num_docks_available}</h3>
      </Card.Description>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Card.Content>
  </Card>
)

export default DivvyCard