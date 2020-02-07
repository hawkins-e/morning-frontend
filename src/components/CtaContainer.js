import React from "react"
import CtaCard from "./CtaCard";

const URL = 'https://api.myjson.com/bins/brmqi'

class CtaContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cta: [],
      isLoading: false
    };
  }
  

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          cta: data,
          // stop_name: data.eta,
          // destination: data.eta.stpDe,
          // route: data.eta.rt,
          // arrival_time: data.eta.arrT,
          isLoading: false,
        });
      });
  }

  getNextTrain = (run) => {
    let train_data = this.state.cta
    console.log({train_data})
    // let myTrain = train_data.ctatt.eta[0].trDr
    // console.log(myTrain)  
    return train_data?.ctatt?.eta?.find(train => train.rn === run)

    
  }

  
  render() {
    
    // console.log("DEBUG RENDER", this.state.divvyStation)
    let renderContent;
    if (this.state.isLoading) {
      renderContent = <div> Is Loading... </div>;   
    } else {    
      renderContent = (
        <div>
          <CtaCard
          getNextTrain={this.getNextTrain}
          // stop_name= {this.state.stop_name}
          // destination = {this.state.destination}
          // route = {this.state.route}
          // arrival_time= {this.state.arrival_time}
          />
        </div>
      );
    }

    return renderContent;
  }
}

export default CtaContainer 