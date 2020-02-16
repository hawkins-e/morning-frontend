import React from 'react'
import { Card } from 'semantic-ui-react' 

// 'https://www.transitchicago.com/cms/images/layout/logo.png'

const CtaCard = (props) => (
  <Card height={600}>
    <img height={150} src= {'https://www.transitchicago.com/assets/1/6/pageheader_ctatrademarks.png'} wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
       <h3>Stop: {props.station_name}</h3>
      </Card.Meta> 
      <br></br>
        <Card.Description>
        <h3> Next Bus In: </h3>
        <h3>{props.eta} minutes </h3>
        <h3>{props.second_eta} minutes </h3>
        </Card.Description>
        <br></br>
        <br></br>
    </Card.Content>
  </Card>
)

export default CtaCard 