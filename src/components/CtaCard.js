import React from 'react'
import { Card, Image } from 'semantic-ui-react'

// 'https://www.transitchicago.com/cms/images/layout/logo.png'

const CtaCard = (props) => (
  <Card>
    <Image src= 'https://www.transitchicago.com/assets/1/6/pageheader_ctatrademarks.png' size="large"  wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
      Stop: {props.station_name}  
      </Card.Meta> 
      <br></br>
        <Card.Description>
        <h4> Next Bus In: </h4>
       <h5>{props.eta} minutes </h5>
      <h5> {props.second_eta} minutes </h5>
        </Card.Description>
        <br></br>
        <br></br>
        
    </Card.Content>
  </Card>
)

export default CtaCard 