function getPlayer() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => console.log(data))
}
function getUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => console.log(data))
}

const imageBlock = document.getElementById('img-block');
fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => response.json())
    .then(data => showAll(data))

function showAll(data) {
    data.forEach(item => showImage(item));
}

function showImage(data) {
    const image = document.createElement('img');
    image.src = data.url;
    image.id = data.id;
    image.title = data.title;
    image.width = 150;
    image.style.margin = '5px';
    image.style.border = '1px solid gray';
    imageBlock.appendChild(image);
}

