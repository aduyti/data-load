function getPlayer() {
    // console.log(5);
    fetch('data.json')
        .then(response => response.json())
        .then(data => console.log(data))
}