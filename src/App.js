import {useRef, useState, useEffect} from 'react';
import './App.css';
import benches from './assets/bench_data.js';

function App() {

  const mapRef = useRef();
  // const markers = useRef({});
  const [map, setMap] = useState(null);
  const first_bench = benches[0]

  useEffect(() => {
    if(!map){
      setMap(new window.google.maps.Map(mapRef.current, {
        center:{
          lat: first_bench.lat,
          lng: first_bench.lng
        },
        zoom: 11
      }))
    }
  }, [])
  
  return (
    <div ref={mapRef} id="map"></div>
  );
}

export default App;
