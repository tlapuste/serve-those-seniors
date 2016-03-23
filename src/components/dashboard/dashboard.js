import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, SearchBox } from 'react-google-maps';


class Dashboard extends Component {
  constructor(props){
    super(props);

    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleMapClick(e) {
    e.preventDefault();
  } 


  render() {
    return (
      <section style={{height: "100%"}}>
        Hey I'm actually here!
        <GoogleMapLoader>
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={3}
              defaultCenter={{lat: -25.363882, lng: 131.044922}}
              >
            </GoogleMap>
          </GoogleMapLoader>
      </section>
    );
  }
}

export default Dashboard;

/*
              onClick={this.handleMapClick}>
              {this.state.markers.map((marker, index) => {
                return (
                  <Marker
                    {...marker}
                    onRightclick={this.handleMarkerRightclick.bind(this, index)} 
                  />
                );
              })}
*/
