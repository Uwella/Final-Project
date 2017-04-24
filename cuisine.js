//window.onload = function() {
      function initMap() {
        var myCenter = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 6,
          center: myCenter
        });
        
        var geocoder = new google.maps.Geocoder;
        var infowindow = new google.maps.InfoWindow;

        google.maps.event.addListener(map, 'click', function(event){
        	geocodeLatLng(geocoder, map, infowindow);
		});
      }//end of initMap
	//};//end of window.onlaod

function geocodeLatLng(geocoder, map, infowindow){
	geocoder.geocode(
		{'latLng': event.latLng},
		function(results, status){
			if(status === 'OK') {
				if(results[7]){
					map.setZoom(11);
					var marker = new google.maps.Marker({
						position: event.latLng;
						map: map
					});
					infowindow.setContent(results[7].formatted_address);
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