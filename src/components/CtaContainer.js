import React from "react"
import CtaCard from "./CtaCard";

// const URL = 'https://api.myjson.com/bins/brmqi'

const URL = 'https://api.myjson.com/bins/1ddjn0'

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
          station_name: data['bustime-response']['prd']['0']["stpnm"],
          eta: data['bustime-response']['prd']['0']['prdctdn'],
          // second_eta: data['bustime-response']['prd']['1']['prdctdn'] 
        
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