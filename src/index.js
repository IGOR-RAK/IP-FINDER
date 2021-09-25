import 'leaflet/dist/leaflet.css'
import {useLeafleat,addTileLayer,validateIp,addOfsets} from './helpers'
import L, { map } from 'leaflet'
import icon from '../images/icon-location.svg'


const ipInput = document.querySelector(".search-bar__input")
const btn = document.querySelector(".search-bar__btn")
const apiAdress = document.querySelector("#ip")
const isp = document.querySelector("#isp")
const timezone = document.querySelector("#timezone")
const location = document.querySelector("#location")
btn.addEventListener("click",getData)
ipInput.addEventListener('keydown',handleKey)
const mapArea = document.querySelector('.map');


const markerIcon = L.icon({
    iconUrl:icon,
    iconSize:[30,40]
})

const mymap = L.map(mapArea,{
    center:[51.505, -0.09],
    zoom:13,
    zoomControl: false
});
addTileLayer(mymap)
L.marker([51.505, -0.09],{icon:markerIcon}).addTo(mymap)



$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function( location ) {        
        mymap.setView([location.latitude,location.longitude]);
 getInitData(location.IPv4) 
    }
});	




function getData(){
     if (validateIp(ipInput.value)){
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_dD324B44WEDkwyGlxNxVRk8rD14Vb&ipAddress=${ipInput.value}`)
        .then(res=>res.json())
        .then(data=>{
            setView(data)
        })
     }   
}
function getInitData(ip){
    if (validateIp(ip)){
       fetch(`https://geo.ipify.org/api/v1?apiKey=at_dD324B44WEDkwyGlxNxVRk8rD14Vb&ipAddress=${ipInput.value}`)
       .then(res=>res.json())
       .then(data=>{
           setView(data)
       })
    }   
}

function handleKey(event){
if (event.key === 'Enter'){
    getData()
}
}
function setView(data){   
    apiAdress.innerText = data.ip;
    isp.innerText = data.isp;
    timezone.innerText = data.location.timezone;
    location.innerText = `${data.location.city}, ${data.location.country} `;  
 mymap.setView([data.location.lat,data.location.lng]);
 L.marker([data.location.lat,data.location.lng],{icon:markerIcon}).addTo(mymap)
 if (matchMedia('(max-width: 1023px)').matches) {
    addOfsets(mymap)
 }
 
 
}



	