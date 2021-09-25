import L from 'leaflet';
import {addTileLayer} from './addTileLayer'

export function useLeafleat(lat,lng,markerIcon,mapArea){
    
const map = L.map(mapArea,{
    center:[lat,lng],
    zoom:13,
    zoomControl: false
});
addTileLayer(map)
L.marker([lat,lng],{icon:markerIcon}).addTo(map)
}