var map;

function InitializeMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 13.041590, lng: 80.172128 },
        zoom: 14
    });
}