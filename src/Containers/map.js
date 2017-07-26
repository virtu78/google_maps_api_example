import React from 'react';
import {Map,  Marker, GoogleApiWrapper} from 'google-maps-react';
export class MapContainer extends React.Component {
  render() {
    const style = {
        width: '50%',
        height: '100%'
     }
    return (
        <Map 
          google={this.props.google}
          style={style}
          zoom={16}
          initialCenter={{
            lat: 56.826062,
            lng: 60.592356
          }}
         onClick={this.onMapClicked}
        >
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />     
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAdv0JbtcaHUrLYpOTReK8-BE2wiQkrqdo')
})(MapContainer)




