import {useRef, useState, useEffect} from 'react';
import './App.css';
import benches from './assets/bench_data.js';

function App() {

  const mapRef = useRef();
  const markers = useRef({});
  const [map, setMap] = useState(null);
  const averageLatLng = {lat: 0, lng: 0}

  useEffect(() => {
    if(!map){
      setMap(new window.google.maps.Map(mapRef.current, {
        center:{
          lat: averageLatLng.lat,
          lng: averageLatLng.lng
        },
        zoom: 11
      }))
    }
  }, [])

  useEffect(() => {
    if(benches[0]){
      benches.forEach(bench => {
        averageLatLng.lat += bench.lat
        averageLatLng.lng += bench.lng
      })
      averageLatLng.lat /= benches.length
      averageLatLng.lng /= benches.length
    }

    markers.current = {}

    benches.forEach(bench => {
      markers.current[bench.id] = new window.google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng},
        map: map
      })
    })

  }, [map])
  
  return (
    <div ref={mapRef} id="map"></div>
  );
}

export default App;
