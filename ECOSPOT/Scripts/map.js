mapboxgl.accessToken = 'pk.eyJ1IjoiZGlvZ29waW1lbnRhIiwiYSI6ImNsaWxnZ2JnMDAyaXAzY3B2MWRxNHMxdjgifQ.n7_w6LbXwGRl183yIEL4jA';

var bounds = [
  [-9.5266, 36.8383], // Southwest coordinates
  [-6.1891, 42.1546]  // Northeast coordinates
];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  bounds: bounds
});
