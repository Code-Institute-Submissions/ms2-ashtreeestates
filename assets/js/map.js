let map;

// Different set of locations

let twoBeds = [{
        coords: {
            lat: 51.4510,
            lng: -2.6073
        }, // St George's
        content: `<h4 class="info-head">St George's Road</h4>`
    },
    {
        coords: {
            lat: 51.4642,
            lng: -2.6062
        }, // Abbotsford Road
        content: `<h4 class="info-head">Abbotsford Road</h4>`
    },    
];

let threeBeds = [{
        coords: {
            lat: 51.4568,
            lng: -2.6121
        }, // Richmond Hill
        content: `<h4 class="info-head">Richmond Hill</h4>`
    },
    {
        coords: {
            lat: 51.4665,
            lng: -2.6098
        }, // Ashgrove Road
        content: `<h4 class="info-head">Ashgrove Road</h4>`
    },
    {
        coords: {
            lat: 51.460,
            lng: -2.6016
        }, // St Michael's Hill Lower
        content: `<h4 class="info-head">St Michael's Hill Lower</h4>`
    },
    {
        coords: {
            lat: 51.4659,
            lng: -2.5935
        }, // Sydenham Hill
        content: `<h4 class="info-head">Sydenham Hill</h4>`
    },
    
];

let fourBeds = [{
        coords: {
            lat: 51.4769,
            lng: -2.5974
        }, // Berkeley Avenue
        content: `<h4 class="info-head">Berkeley Avenue</h4>`
    },
    {
        coords: {
            lat: 51.4537,
            lng: -2.6082
        }, // Rosebury Terrace
        content: `<h4 class="info-head">Rosebury Terrace</h4>`
    },
    {
        coords: {
            lat: 51.4517,
            lng: -2.6202
        }, // Dowry Road
        content: `<h4 class="info-head">Dowry Road/h4>`
    },
];

let fiveBeds = [{
        coords: {
            lat: 51.4603,
            lng: -2.6016
        }, // St Michael's Hill Upper
        content: `<h4 class="info-head">St Michael's Hill Upper</h4>`
    },
    
];

let sixBeds = [{
        coords: {
            lat: 51.4546,
            lng: -2.5927
        }, // High Street
        content: `<h4 class="info-head">High Street</h4>`
    },
];    

let sevenBeds = [{
        coords: {
            lat: 51.4545,
            lng: -2.5989
        }, // Pipe Lane
        content: `<h4 class="info-head">Pipe Lane</h4></h4>`
    },           
];

// Initialise map

function initMap(selectedLocations) {
    let myLatlng = {
        lat: 51.4545,
        lng: -2.5879
    };
    map = new google.maps.Map(document.getElementById("map-view"), {
        zoom: 14,
        center: myLatlng,
        disableDefaultUI: true,
    });

    // Change zoom level on smaller screen sizes

    if (window.screen.width < 768) {
        let myLatlng = {
            lat: 50.4211456,
            lng: -4.9904922
        };

        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: myLatlng,
            disableDefaultUI: true,
        });
    }

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Iterate through the array of locations and place the markers on the map

    if (selectedLocations) {
        for (let i = 0; i < selectedLocations.length; i++) {
            let marker = new google.maps.Marker({
                position: selectedLocations[i].coords,
                map: map,
                animation: google.maps.Animation.DROP,
            });

            // Create info window

            const infowindow = new google.maps.InfoWindow({
                content: selectedLocations[i].content,
            });

            // Close previous info window when new info window opened

            google.maps.event.addListener(marker, 'click', function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }

                infowindow.open(map, marker);
                currentInfoWindow = infowindow;
            });

            var currentInfoWindow = null;
        }
    }
}

// Event listeners for button options to drop markers and call functions to display top 3

document.getElementById("2-bed-btn").addEventListener("click", () => {
    initMap(twoBeds);
    
});
document.getElementById("3-bed-btn").addEventListener("click", () => {
    initMap(threeBeds);
    
});
document.getElementById("4-bed-btn").addEventListener("click", () => {
    initMap(fourBeds);
    
});
document.getElementById("5-bed-btn").addEventListener("click", () => {
    initMap(fiveBeds);
    
});
document.getElementById("6-bed-btn").addEventListener("click", () => {
    initMap(sixBeds);
    
});
document.getElementById("7-bed-btn").addEventListener("click", () => {
    initMap(sevenBeds);
    
});