import React from 'react';
import HomepageLayout from './components/HomepageLayout'
import './App.css'
import {Responsive} from "semantic-ui-react"

function App() {
  return (
    <Responsive className="App"
    style = {{
    backgroundColor: "Black",
    fontFamily: 'Bebas Neue, cursive',
    paddingTop: "100px",
    paddingRight: "80px",
    paddingBottom: "100px",
    paddingLeft: "80px"
    }}>
      <HomepageLayout/>  
    </Responsive>
  );
}

export default App;
