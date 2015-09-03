var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        //
    }
};

app.initialize();

document.getElementById("abrirMenu").addEventListener('click', function() {

    document.getElementById("menu").className += " aberto";

}, false);

document.getElementById("fecharMenu").addEventListener('click', function() {

    document.getElementById("menu").className = "menu";
    
}, false);