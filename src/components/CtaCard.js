import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CtaCard = (props) => (
  <Card>
    <Image src= 'https://www.transitchicago.com/cms/images/layout/logo.png' wrapped ui={false} />
    <Card.Content>
      <Card.Description>
      CTA DATA HERE 
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CtaCard 