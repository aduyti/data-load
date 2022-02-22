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
fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then(response => response.json())
    .then(data => showImage(data))

function showImage(data) {
    const image = document.createElement('img');
    image.src = data.url;
    image.id = data.id;
    image.title = data.title;
    image.width = 150;
    imageBlock.appendChild(image);
}

