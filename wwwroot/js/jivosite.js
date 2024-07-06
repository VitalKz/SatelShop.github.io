(function () {
    var widget_id = 'UiHPL9NaNj';
    var d = document;
    var w = window;

    function loadJivo() {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//code.jivosite.com/script/widget/' + widget_id + ' async';
        var ss = document.getElementsByTagName('script')[0];
        ss.parentNode.insertBefore(s, ss);
    }

    if (d.readyState == 'complete') {
        loadJivo();
    } else {
        if (w.attachEvent) {
            w.attachEvent('onload', loadJivo);
        } else {
            w.addEventListener('load', loadJivo, false);
        }
    }
})();