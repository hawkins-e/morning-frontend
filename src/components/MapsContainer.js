import React from "react";

// const URL = 'https://maps.googleapis.com/maps/api/directions/json?'
// origin=Toronto&destination=Montreal
// &avoid=highways
// &mode=bicycling
// &key=YOUR_API_KEY

class MapsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      maps: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          maps: data,
          isLoading: false
        });
      });
  }


}

export default MapsContainer;
