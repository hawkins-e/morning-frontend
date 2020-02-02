import React from 'react';
import DivvyContainer from './DivvyContainer';
import CtaContainer from './CtaContainer';
import HomepageLayout from "./HomepageLayout"
// import MapsContainer from './MapsContainer'

class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <DivvyContainer
                 getStation={this.getStation}/>
                <CtaContainer/>
                {/* <MapsContainer/> */}
            </div>
        )
    }

}

export default Dashboard 