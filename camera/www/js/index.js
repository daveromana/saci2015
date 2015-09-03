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

document.getElementById("camera").addEventListener('click', function() {
    
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 80,
        sourceType : Camera.PictureSourceType.CAMERA,
        destinationType: Camera.DestinationType.DATA_URL
    });
    function onSuccess(imageData) {
        var image = document.getElementById('imagem');
        image.src = "data:image/jpeg;base64," + imageData;
    }
    function onFail(message) {
        alert('Erro: ' + message);
    }

}, false);

document.getElementById("galeria").addEventListener('click', function() {
    
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 80,
        sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: Camera.DestinationType.FILE_URI
    });
    function onSuccess(imageURI) {
        var image = document.getElementById('imagem');
        image.src = imageURI;
    }
    function onFail(message) {
        alert('Erro: ' + message);
    }

}, false);