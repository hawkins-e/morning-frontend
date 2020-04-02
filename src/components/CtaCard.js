import React from 'react'
import { Card, Image } from 'semantic-ui-react' 



const CtaCard = (props) => (
<div>
        <br></br>
      
    <Image src='https://www.transitchicago.com/assets/1/6/pageheader_ctatrademarks.png' paddingtop="10px" fluid />
        <br></br>
        <br></br>
    <Card.Content>
      <Card.Meta>
      <h3 style={{fontFamily: 'Noto Serif'}}>Stop: {props.station_name} </h3>
      </Card.Meta> 
      <br></br>
        <Card.Description>
        <h2 style = {{fontFamily: 'Noto Serif'}}> Next Bus In: </h2>
       <h2 style = {{fontFamily: 'Noto Serif'}}> {props.eta} minutes </h2>
      <h2 style = {{fontFamily: 'Noto Serif'}}> {props.second_eta} minutes </h2>
        </Card.Description>
        <br></br>
        <br></br>
    </Card.Content>
    </div>  
)

export default CtaCard 