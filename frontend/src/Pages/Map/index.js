import React, { Component } from 'react'

import Header from '../../Components/MapComponents/header';
import Map from '../../Components/MapComponents/map';

class Home extends Component {
  render(){
    return(
      <div>
        <Header
          title='Mapa'
        />  
        <Map
          container='map'
          style='mapbox://styles/mapbox/streets-v11'
          zoom={10}
          classNameStyle='mapContainer'
          accessToken='pk.eyJ1IjoiZGFuY2FyYWd1YSIsImEiOiJjazZhOG5lN24wYjM3M21yejZzNmNuenZtIn0.PbSZScV1uvbyTq4yN14Y5Q'
        />
      </div>
    )
  }
}

export default Home

//style='mapbox://styles/mapbox/outdoors-v11'
          //style='mapbox://styles/mapbox/satellite-streets-v11'
          //style='mapbox://styles/mapbox/light-v10'
          //style='mapbox://styles/mapbox/dark-v10'
          //style='mapbox://styles/mapbox/satellite-v9'
          //style='mapbox://styles/mapbox/navigation-preview-day-v4'
          //style='mapbox://styles/mapbox/navigation-preview-night-v4'
          //style='mapbox://styles/mapbox/navigation-guidance-day-v4'
          //style='mapbox://styles/mapbox/navigation-guidance-night-v4'