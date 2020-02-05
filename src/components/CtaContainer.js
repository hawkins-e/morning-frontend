import React from "react"
import CtaCard from "./CtaCard";

const URL = 'http://lapi.transitchicago. com/api/1.0/ttarrivals.aspx?642632906178436fa3f103470c610444&max=1& mapid=40360&outputType=JSON'

class CtaContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cta: [],
      isLoading: false
    };
  }

  componentDidMount() {
    fetch(URL, {mode: 'cors'})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          cta: data,
          isLoading: false,
        });
      });
  }



  render() {

    // console.log("DEBUG RENDER", this.state.divvyStation)
    let renderContent;
    if (this.state.isLoading) {
      renderContent = <div> Is Loading... </div>;   
    } else {    
      renderContent = (
        <div>
          <CtaCard/>
        </div>
      );
    }

    return renderContent;
  }
}

export default CtaContainer 