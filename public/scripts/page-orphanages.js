// CREATE MAP 
const map = L.map('mapid').setView([-3.0489342,-59.9928554], 16);

//CREATE AND ADD TILELAYER
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// CREATE ICON

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

});

// CREATE POPUP OVERLAY

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>') ;




// create and add marker
L.marker([-3.0489342,-59.9928554], {icon})
.addTo(map)
.bindPopup(popup);