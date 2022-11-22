function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 41.8730, lng: -87.6279},
  });
  var marker = new google.maps.Marker({
    position: { lat: 41.8827, lng: -87.6233},
    map: map,
  });

  var infowindow = new google.maps.InfoWindow({
    content:"These locations consist of my school, Jones College Prep, the Cloud Gate, more famously known as The Bean, and the Willis Tower, which are all located in Chicago; I frequent these areas a lot."
  });
  infowindow.open(map, marker);

  const triangleCoords = [
    { lat: 41.8730, lng: -87.6279 },
    { lat: 41.8827, lng: -87.6233 },
    { lat: 41.8789, lng: -87.6359 },
    { lat: 41.8730, lng: -87.6279 },
  ];
  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2.5,
    fillColor: "#FF0000",
    fillOpacity: 0.3,
  });

  bermudaTriangle.setMap(map);
  
}

window.initMap = initMap;