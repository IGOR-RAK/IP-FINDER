export function addOfsets(map){
    const offsetY = map.getSize().y*0.1;
    const offsetX = map.getSize().x;   
 map.panBy([0,-offsetY],{animate:false}) 
}