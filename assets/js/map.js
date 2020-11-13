const properties = {"lat": 51.4545, "lng": -2.5879}

function myMap(){

    const mapProp = {
        center: properties,
        zoom: 14,
    };

$(document).ready(function () {
    const map = new google.maps.Map(document.getElementById("map-view"), mapProp);
});}

myMap()