import React from "react"
import Dashboard from './Dashboard'
import '../App.css'
import {Grid} from 'semantic-ui-react'

import {
  Container,
  Header
} from 'semantic-ui-react'

class HomepageLayout extends React.Component {
  render() {
    return(
      <div>
      <Header
        as='h1'
        content='MorningGo'
        inverted
        style={{
          fontFamily: 'Bebas Neue',
          fontWeight: 'heavy',
          fontSize: "125px"
        }}
      />
      <Header
        content='Have a Fantastic Morning'
        inverted
        style={{
          fontFamily: 'Noto Serif',
          fontWeight: 'normal',
          fontSize: "35px"
        }}
      />
      <br></br>
      <br></br>
      <br></br>
      <Grid 
        centered columns= "equal"
      >
      <Dashboard/>
     </Grid>
     </div>
    )
  }
}
export default HomepageLayout