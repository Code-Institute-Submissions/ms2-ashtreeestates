let stGeorges = [{
        coords: {
            lat: 51.4510,
            lng: -2.6073
        }, // St George's Road    
    },];

const contentString =    
        "<h4 class='info-head'>St George's Road</h4><p><i class='fas fa-bed'></i> 2 &emsp;<i class='fas fa-bath'></i> 1 &emsp; <i class='fas fa-pound-sign'></i> 525 each pcm </p>"  

let pos;
let map;
const myLatLng = { lat: 51.4510, lng: -2.6073 };


function initMap() {
    // Set the default location 
        pos = myLatLng;
        map = new google.maps.Map(document.getElementById('explore-map'), {
            center: pos,
            zoom: 15
        });

    // Set the marker for this property       
    const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "St George's Road",
  });

    // Create info window
    const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });  
  
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

}
