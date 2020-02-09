import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CtaCard = (props) => (
  <Card>
    {console.log(props)}
    <Image src= 'https://www.transitchicago.com/cms/images/layout/logo.png' wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
        {/* Station:{props.getRun(etas)}'815' */}
      </Card.Meta>
        <Card.Description>
          
        </Card.Description>
    </Card.Content>
  </Card>
)

export default CtaCard 