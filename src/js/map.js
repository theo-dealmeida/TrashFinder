$(function () {
    if(!localStorage.getItem('currentUser')){
        alert("Vous devez être connecté pour accéder à cette page")
        window.location.href = 'login.html'
    }
    $("#logout").on('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    })
})

var map;

$(document).ready(function () {
    mapboxgl.accessToken = 'pk.eyJ1IjoicGl0aXBpbG91IiwiYSI6ImNrdWd0Y2phZzI1OHIzMW12bG8yYXNnYmYifQ.UqoIHVMY0gPn09V-Wa1KeQ';

    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [7.0642366, 43.6171461],
        zoom: 16.15,
        attributionControl: false
    });

    const marker = new mapboxgl.Marker()
        .setLngLat([7.0642366, 43.6171461])
        .addTo(map);
});

var marker2;
var marker3;
var marker4;
var marker5;

function showPlasticTrash() {
    if (document.getElementById('plasticBox').checked) {
        marker2 = new mapboxgl.Marker({ color: 'black'})
        .setLngLat([7.065698, 43.618757])
        .addTo(this.map);
        //43.616613,7.066385
        marker3 = new mapboxgl.Marker({ color: 'black'})
        .setLngLat([7.066385, 43.616613])
        .addTo(this.map);
        //43.616870,7.061811
        marker4 = new mapboxgl.Marker({ color: 'black'})
        .setLngLat([7.061811, 43.616870])
        .addTo(this.map);
        //43.615301,7.067598
        marker5 = new mapboxgl.Marker({ color: 'black'})
        .setLngLat([7.067598, 43.615301])
        .addTo(this.map);
    } else {
        marker2.remove();
        marker3.remove();
        marker4.remove();
        marker5.remove();
    }
}

var marker6;
var marker7;

function showGlassesTrash() {
    if (document.getElementById('glassesBox').checked) {
        marker6 = new mapboxgl.Marker({ color: 'green'})
        .setLngLat([7.063547, 43.617460])
        .addTo(this.map);
        marker7 = new mapboxgl.Marker({ color: 'green'})
        .setLngLat([7.067738, 43.617806])
        .addTo(this.map);
    } else {
        marker6.remove();
        marker7.remove();
    }
}