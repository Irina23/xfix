/*map*/


    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:50.4481207, lng: 30.5223282},
        scrollwheel: false,
        zoom: 15


    });
    //var image = 'img/icons/pointer.png';
    var marker = new google.maps.Marker({
        position: {lat: 50.4481207, lng: 30.5223282},
        map: map
        //icon: image
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    var infowindow = new google.maps.InfoWindow({
        content: 'г. Киев , ул. Хрещатик',
        maxWidth: 300
    });



