import React from 'react';
import DivvyContainer from './DivvyContainer';
import CtaContainer from './CtaContainer';
import {Card} from "semantic-ui-react"
import WeatherContainer from "./WeatherContainer"


class Dashboard extends React.Component {
    // state = {
    //     message: "",
    //     error: "", 
    //     eee: "",
    //     text: ""

    // };

    render(){
        return(
        <Card.Group itemsPerRow={3}> 
            <div class="ui three centered cards">

                 <Card color="green">
                  <CtaContainer/>
                </Card>
            
                <Card color="blue">
                  <WeatherContainer/>
                </Card> 

                <Card color="orange">
                    <DivvyContainer
                    getStation={this.getStation}/>
                </Card>

            </div>
        </Card.Group>
        )
    }

}

export default Dashboard 