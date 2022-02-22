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

