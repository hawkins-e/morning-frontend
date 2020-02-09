import React from 'react';
import DivvyContainer from './DivvyContainer';
import CtaContainer from './CtaContainer';
import {Card} from "semantic-ui-react"
import WeatherContainer from "./WeatherContainer"


class Dashboard extends React.Component {
    render(){
        return(
        <Card.Group itemsPerRow={3}> 
            <div class="ui three centered cards">
                
                <Card>
                    <DivvyContainer
                    getStation={this.getStation}/>
                </Card>

                <Card>
                  <CtaContainer/>
                </Card>

                <Card>
                  <WeatherContainer/>
                </Card> 

            </div>
        </Card.Group>
        )
    }

}

export default Dashboard 