mapboxgl.accessToken = 'pk.eyJ1IjoiZGlvZ29waW1lbnRhIiwiYSI6ImNsaWxnZ2JnMDAyaXAzY3B2MWRxNHMxdjgifQ.n7_w6LbXwGRl183yIEL4jA';

var bounds = [
  [-9.5231, 40.9019], // Coordenadas sudoeste (Southwest) da zona norte de Portugal
  [-6.1891, 42.1546]  // Coordenadas nordeste (Northeast) da zona norte de Portugal
];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  bounds: bounds
});
