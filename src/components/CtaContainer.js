import React from "react"
import CtaCard from "./CtaCard";

const URL = '/bustime/api/v2/getpredictions?key=JTDi73TetKb86BTRqBCaxLTDW&rt=70&stpid=2034&format=json';

class CtaContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cta: [],
      isLoading: true,
    };
  }
  
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
       console.log(data);
       this.setState({
          cta: data,
          isLoading: false,
          station_name: (data['bustime-response']['prd']['0']['stpnm']),
          eta: (data['bustime-response']['prd']['0']['prdctdn']),
          second_eta: (data['bustime-response']['prd']['1']['prdctdn']) 
        });
        
      })
  } 
    
  
  render() {
    let renderContent;
    if (this.state.isLoading) {
      renderContent = <div> Is Loading... </div>;   
    } else {    
      renderContent = (
        <div>
          <CtaCard
          cta = {this.state.cta || "unknown"}
          eta = {this.state.eta || "unknown"}
          second_eta= {this.state.second_eta || "unknown"}
          station_name = {this.state.station_name || "unknown"}
          />
        </div>
      );
    }
    
    return renderContent;
  }
}

export default CtaContainer 