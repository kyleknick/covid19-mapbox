import "https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.js";

const mapbox_token = 
"pk.eyJ1IjoiY2t5bGVrIiwiYSI6ImNqeHdxa2dwaTA3ZmQzbm1tZ3cwOXZpZ3YifQ.VxykQDV1fNWSiMjNzfdIMw"

mapboxgl.accessToken = mapbox_token;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});

fetch("https://data.austintexas.gov/resource/4p54-9544.json")
.then(response => response.json())
.then(data => {
    console.log('data is', data);

    data.forEach(data => {
            const { address, typeofcomplaint } = data;
            console.log(address, typeofcomplaint);
        });
    });
