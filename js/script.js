function initMap() {
  var map = document.getElementById('map')
  var location = new google.maps.LatLng(41.8827, 87.6233);
  var mapOptions = {
    center: location,
    zoom: 10,
    mapTypeId: "satellite",
  }
};

  var line = {
    var flightPlanCoordinates = {
      { lat: 41.8827, lng: 87.6233 },
      { lat: 41.8730, lng: 87.6279 },
    };
    var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

  flightPath.setMap(map);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

var lineSymbol = {
  path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};

// Create the polyline and add the symbol via the 'icons' property.
var line = new google.maps.Polyline({
  path: [{lat: 41.8827, lng: 87.6233}, {lat: 41.8730, lng: 87.6279}],
  icons: [{
    icon: lineSymbol,
    offset: '100%'
  }],
  map: map
});

  var infowindow = new google.maps.InfoWindow({
    content: "The Bean to Jones College Prep",
  });
  var marker = new google.maps.Marker({
    position: location,
    map,
    title: "The Bean",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

var myMap = new google.maps.Map(m, mapOptions);

google.maps.event.addDomListener(window, 'load', init);