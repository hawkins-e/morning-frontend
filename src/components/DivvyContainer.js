import React from "react";
import Card from "./Card"

const URL = "https://gbfs.divvybikes.com/gbfs/en/station_status.json";

class DivvyContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      divvyStation: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          divvyStation: data,
          isLoading: false
        });
      });
  }

  getStation = (stationId) => {
    let station = this.state.divvyStation;
    // console.log({ station });
    // let myStation = station.data.stations.find(dock => dock.station_id === 182);
    return station?.data?.stations?.find(station => station.station_id === stationId)
  };

  render() {

    // console.log("DEBUG RENDER", this.state.divvyStation)
    let renderContent;
    if (this.state.isLoading) {
      renderContent = <div> Is Loading... </div>;   
    } else {    
      renderContent = (
        <div>
          <Card getStation={this.getStation}/>
        </div>
      );
    }

    return renderContent;
  }
}

export default DivvyContainer;
