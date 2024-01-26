let latitude, longitude, destination;

$(document).ready(function(){
    alert("Please allow the device to know your location")
    initGeolocation();
})

function initGeolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success);
    }
    else
        alert("Sorry, your browser does not support geolocation")
}

$(function(){
	$("#navigate-button").click(function(){
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

function success(position){
	longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    mapboxgl.accessToken = "pk.eyJ1IjoiY2xlb3BhdHJhMSIsImEiOiJjbG5idDlzM2swM3pnMmp1Zmx2eWljbDFyIn0.8jmp8LtiLdi6ekn-7sqBKw"

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 5
    });

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}).on('result', function (e) {
			destination = e.result.center
		})
	);

	var img1 = document.querySelector("#qutbMinar")
	var marker1 = new mapboxgl.Marker({
		element: img1
	})
		.setLngLat([77.1855, 28.5245])
		.addTo(map);

	var img2 = document.querySelector("#hawaMahal");
	var image2 = new mapboxgl.Marker({
    	element: img2
	})
    	.setLngLat([75.8267, 26.9239])
    	.addTo(map);

	var img3 = document.querySelector("#tajMahal");
	var image3 = new mapboxgl.Marker({
    	element: img3
	})
    	.setLngLat([78.0421, 27.1751])
    	.addTo(map);

	var img4 = document.querySelector("#goldenTemple");
	var image4 = new mapboxgl.Marker({
    	element: img4
	})
    	.setLngLat([74.8765, 31.6200])
    	.addTo(map);
}


