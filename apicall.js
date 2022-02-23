const getData = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => showUser(data))
}
const showUser = data => {
    console.log(data);
}
getData();