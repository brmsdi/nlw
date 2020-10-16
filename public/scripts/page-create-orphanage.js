// CREATE MAP 
const map = L.map('mapid').setView([-3.0483967,-59.9887959], 16);

//CREATE AND ADD TILELAYER
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// CREATE ICON

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]

});

// CREATE AND ADD marker

let marker;

map.on('click', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //REMOVE ICON NOW

    marker && map.removeLayer(marker);


    /// ADD ICON LAYER

    marker = L.marker([lat, lng], {icon})
    .addTo(map);

});

/* ADD PHOTOS */

function addPhotoField(){
    /* Pegar o container de fotos #images*/
    const container = document.querySelector('#images');

    /* Pegar o container para duplicar .new-image */
    const newsImagesContainers = document.querySelectorAll('.new-upload');

    /* Realizar o clone da ultima imagem adicionada.*/
    const newFieldContainer = newsImagesContainers[newsImagesContainers.length - 1].cloneNode(true);

    // VERIFICAR SE O CAMPO ESTÁ VAZIO 
    const input = newFieldContainer.children[0];

    if(input.value == ""){
        return
    }

    // limpar o campo antes de adicionar ao container as imagens
    input.value = "";

    /* adicionar o clone ao container de #images.*/
    container.appendChild(newFieldContainer);

}

// DELETAR CAMPOS DE IMAGENS
function deleteField(event){
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = "";
        return
    }
    
    span.parentNode.remove();
    
}

// SELECIONAR SIM E NÃO
function toggleSelect(event) {

    // retirar a classe active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('.active')); /// FUNÇÃO QUE SÓ POSSUI UMA LINHA.
    
    // Pegar o botão clicado
    const button = event.currentTarget;

     // colocar a classe active nesse botãoclicado
    button.classList.add('active');

    // atualizar o meu input com o valor selecionados
    const input = document.querySelector('[name="open_on_weekends"]');

    // VERIFICAR SE SIM OU NÃO
    input.value = button-dataset.value;

    
}


