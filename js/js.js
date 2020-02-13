$(document).ready(() => {
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'https://maputnik.github.io/osm-liberty/style.json',
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
        });
})