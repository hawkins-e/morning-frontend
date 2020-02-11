import React from "react"
import CtaCard from "./CtaCard";

// const URL = 'http://ctabustracker.com/bustime/api/v2/getpredictions?key=JTDi73TetKb86BTRqBCaxLTDW&rt=70&stpid=2034&format=json'

class CtaContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cta: [],
      isLoading: false
    };
  }
  

  componentDidMount() {
    fetch('/bustime/api/v2/getpredictions?key=JTDi73TetKb86BTRqBCaxLTDW&rt=70&stpid=2034&format=json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          cta: data,
          station_name: data['bustime-response']['prd']['0']["stpnm"],
          eta: data['bustime-response']['prd']['0']['prdctdn'],
          second_eta: data['bustime-response']['prd']['1']['prdctdn'] 
        
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
    
    console.log(this.state.prdctdn)
    let renderContent;
    if (this.state.isLoading) {
      renderContent = <div> Is Loading... </div>;   
    } else {    
      renderContent = (
        <div>
          <CtaCard
          // getRun={this.getRun}
          // getNextTrain={this.getNextTrain}
          cta = {this.state.cta}
          eta = {this.state.eta}
          second_eta= {this.state.second_eta}
          station_name = {this.state.station_name}
          />
        </div>
      );
    }

    return renderContent;
  }
}

export default CtaContainer 