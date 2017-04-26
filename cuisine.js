      var map;
      var markers =[];

      function initMap() {
        var myCenter = {lat: -25.363, lng: 131.044};
        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 6,
          center: myCenter
        });
        
        var geocoder = new google.maps.Geocoder;
        var infowindow = new google.maps.InfoWindow;

        google.maps.event.addListener(map, 'click', function(event){
        	lat=event.latLng.lat();
        	lng=event.latLng.lng();

        	var latlng = {lat: lat, lng: lng};

        	geocodeLatLng(geocoder, map, infowindow, latlng);
		});
      }//end of initMap
	

function geocodeLatLng(geocoder, map, infowindow, latlng){
	geocoder.geocode(
		{'location': latlng},
		function(results, status){
			if(status === 'OK') {

				last = results.slice(-1).pop();
				country = last.formatted_address;
				console.log(last);

				if(country){

					addMarker(latlng);

					infowindow.setContent(country);
					infowindow.open(map, marker);
				}
				else{
					window.alert('No results found');
				}
			}	
			else{
				window.alert('Geocoder failed due to: ' + status);
			}
		});
	}//end of geocodeLatLng function

function addMarker(latlng){
	clearMarkers();

	var marker = new google.maps.Marker({
			position: latlng,
			map: map
		});
	markers.push(marker);
}