window.getGeolocation = function (dotnetHelper) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            dotnetHelper.invokeMethodAsync('ReceiveLocation', position.coords.latitude, position.coords.longitude);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
