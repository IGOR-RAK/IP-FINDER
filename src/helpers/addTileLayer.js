import L from 'leaflet'


export function addTileLayer(map){
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Igor Rak',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
     accessToken: 'pk.eyJ1IjoiaWdvcm5vcndpZCIsImEiOiJja3RsNHRhaGMwOWIxMnVuMnR1YW9lYmVyIn0.ysi5M4cn2cISww6ccg6YTg'
}).addTo(map);
}

// https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiaWdvcm5vcndpZCIsImEiOiJja3RsNHRhaGMwOWIxMnVuMnR1YW9lYmVyIn0.ysi5M4cn2cISww6ccg6YTg}