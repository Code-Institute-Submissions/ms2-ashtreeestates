const properties = {"lat": 51.4545, "lng": -2.5879}

function myMap(){

    const mapProp = {
        center: properties,
        zoom: 14,
    };

    $(document).ready(function () {
    const map = new google.maps.Map(document.getElementById("map-view"), mapProp);

    const myMarks = [{"lat": 51.4510, "lng": -2.6073},
                    {"lat": 51.4642, "lng": -2.6062},
                    {"lat": 51.4568, "lng": -2.6121},
                    {"lat": 51.4665, "lng": -2.6098},
                    {"lat": 51.4603, "lng": -2.6016},
                    {"lat": 51.4659, "lng": -2.5935},
                    {"lat": 51.4769, "lng": -2.5974},
                    {"lat": 51.4537, "lng": -2.6082},
                    {"lat": 51.4517, "lng": -2.6202},
                    {"lat": 51.4603, "lng": -2.6016},
                    {"lat": 51.4546, "lng": -2.5927},
                    {"lat": 51.4545, "lng": -2.5989},           
                    ];

    for (let i=0; i<myMarks.length; i++){

    

    const marker = new google.maps.Marker({position: myMarks[i]});

    marker.setMap(map);

    }

});}

myMap()