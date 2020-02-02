import React from "react"

const URL = 'http://lapi.transitchicago. com/api/1.0/ttarrivals.aspx?642632906178436fa3f103470c610444&max=1& mapid=40360&outputType=JSON'

class CtaContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cta: [],
      isLoading: true
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
          <h1>Catch That CTA</h1>
          <h3> My Train </h3>
        </div>
      );
    }

    return renderContent;
  }
}

export default CtaContainer 