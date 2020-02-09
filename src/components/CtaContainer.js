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
          // isLoading: false,
        });
      });
  }

  getNextTrain = (run) => {
    let train = this.state.cta
    console.log({train})
    // let myTrain = train.ctatt.eta.trDr
    // console.log(myTrain)  
    return train?.ctatt?.eta?.find(train => train.rn === run)
  }

  // getHp = stats => stats.filter(stat => stat.name === 'hp')[0].value

  getRun = etas => etas.filter(eta => eta.rn === "815")[0].staNm

  render() {
    
    // console.log("DEBUG RENDER", this.state.divvyStation)
    let renderContent;
    if (this.state.isLoading) {
      renderContent = <div> Is Loading... </div>;   
    } else {    
      renderContent = (
        <div>
          <CtaCard
          getRun={this.getRun}
          getNextTrain={this.getNextTrain}
          cta = {this.state.cta}
          stop_name= {this.state.stop_name}
          destination = {this.state.destination}
          route = {this.state.route}
          arrival_time= {this.state.arrival_time}
          />
        </div>
      );
    }

    return renderContent;
  }
}

export default CtaContainer 