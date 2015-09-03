var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        // dispositivo pronto
    }
};

app.initialize();

document.getElementById("geo").addEventListener('click', function() {
    
    navigator.geolocation.getCurrentPosition(carregarMapa, onError, { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true });

    function onError(error) {
        alerta('Ops, ocorreu um erro, tente novamente!');
    }

    function carregarMapa(position) {

        var myPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
        var mapOptions = {
            panControl: false,
            zoomControl: false,
            streetViewControl: false,
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            zoom: 15,
            center: myPosition
        };
        var mapa = new google.maps.Map(document.getElementById('mapa'), mapOptions);

        var marker = new google.maps.Marker({
            position: myPosition,
            map: mapa,
            title: 'Estou aqui!'
        });

    }

}, false);