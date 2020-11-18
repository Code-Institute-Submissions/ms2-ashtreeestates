$(document).ready(function () {  

  let pos;
  let map;
  let currentInfoWindow;
  function initMap() {
    // Set the default location and initialize all variables
    pos = { lat: 51.4510, lng: -2.6073 };
    map = new google.maps.Map(document.getElementById("map"), {
      center: pos,
      zoom: 15,
    });
    
  }

  function getNearbyPlaces(position, placetype) {
    let request = {
      location: position,
      rankBy: google.maps.places.RankBy.DISTANCE,
      keyword: placetype,
          };

          
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, nearbyCallback);
  }

  // Handle the results (up to 20) of the Nearby Search
  function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMarkers(results);
    }
  }

  function createMarkers(places) {
    places.forEach(place => {
    let marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name
    });

    /* TODO: Step 4B: Add click listeners to the markers */
    google.maps.event.addListener(marker, 'click', () => {
    let request = {
    placeId: place.place_id,
    fields: ['name', 'formatted_address', 'geometry', 'rating',
        'website', 'photos']
    };

    /* Only fetch the details of a place when the user clicks on a marker.
    * If we fetch the details for all place results as soon as we get
    * the search response, we will hit API rate limits. */
    service.getDetails(request, (placeResult, status) => {
    showDetails(placeResult, marker, status)
    });
});

function showDetails(placeResult, marker, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    let placeInfowindow = new google.maps.InfoWindow();
    placeInfowindow.setContent('<div><strong>' + placeResult.name +
        '</strong><br>' + 'Rating: ' + placeResult.rating + '</div>');
    placeInfowindow.open(marker.map, marker);

    if (currentInfoWindow){
       currentInfoWindow.close(); 
    }

    currentInfoWindow = placeInfowindow;
    
    } else {
    console.log('showDetails failed: ' + status);
    }
}


  
    });

    
}

$("#cafeRadio").click(function(){
    getNearbyPlaces(pos, "cafe");
})

$("#pubRadio").click(function(){
    getNearbyPlaces(pos, "pub");
})

  initMap();
});

