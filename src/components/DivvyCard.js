import React from 'react'
import { Card,Image } from 'semantic-ui-react'

const DivvyCard = (props) => (
  <div>
    <br></br>
    <br></br>
    <Image src= 'https://d21xlh2maitm24.cloudfront.net/chi/DivvyLogo_p_v2.svg?mtime=20170608140727'   fluid/>
      <br></br>
      <br></br>
      <br></br>
      <Card.Meta style={{fontFamily: 'Noto Serif'}}>
        <h3 style={{fontFamily: 'Noto Serif'}}> Station: Clark & Elm </h3> 
      </Card.Meta>
      <br></br>
      <Card.Description>
      <h2 style={{fontFamily: 'Noto Serif'}}>Bikes Available: {props.getStation('183').num_bikes_available}</h2>
      <h2 style={{fontFamily: 'Noto Serif'}}>Docks Available: {props.getStation('183').num_docks_available}</h2>
      </Card.Description>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  
  </div>
)

export default DivvyCard