import {useRef, useState, useEffect} from 'react';
import './App.css';
import benches from './assets/bench_data.js';

function App() {

  const mapRef = useRef();
  const markers = useRef({});
  const [map, setMap] = useState(null);
  const averageLatLng = {lat: 0, lng: 0};

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
        map: map,
        title: `$${bench.price}`,
        label: `$${bench.price}`
        // icon: {
        //   url: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="50" height="40"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" class="marker-price">$${bench.price}</div></foreignObject></svg>`),
        //   size: new window.google.maps.Size(126, 53),
        //   origin: new window.google.maps.Point(0, 0),
        //   anchor: new window.google.maps.Point(20, 20)
        // },
      })
      markers.current[bench.id].addListener('click', () => {
        alert(`That's ${bench.title}!`)
      })
    })

  }, [map])
  
  return (
    <div ref={mapRef} id="map"></div>
  );
}

export default App;
