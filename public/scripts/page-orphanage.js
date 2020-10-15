// CREATE OPTIONS 
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// CREATE MAP 

const map = L.map('mapid', options).setView([-3.0483967,-59.9887959], 16);

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


// create and add marker
L.marker([-3.0483967,-59.9887959], {icon})
.addTo(map);


/* image galery*/

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")

    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    // selecionar a image clicada

    const image = button.children[0]

    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o conteiner de imagem

    imageContainer.src= image.src

    // adicionar a classe .active para o botão clicado
    button.classList.add('active');

}