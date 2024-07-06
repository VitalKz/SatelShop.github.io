window.getGeolocation = function (dotnetHelper) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            dotnetHelper.invokeMethodAsync('ReceiveLocation', position.coords.latitude, position.coords.longitude);
        });
    } else {
        console.log("Геопозиция не поддерживается в текущем браузере.");
    }
}

window.askForGeolocation = function (dotnetHelper) {
    if (confirm("Желаете определить вашу текущую геопозицю?")) {
        window.getGeolocation(dotnetHelper);
    } else {
        console.log("Пользователь отклонил доступ к геопозиции.");
    }
};