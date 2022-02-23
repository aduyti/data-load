const getData = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => showUser(data.results))
}
const showUser = users => {
    const usersBlock = document.getElementById('users');
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.style.border = '1px solid gray';
        userDiv.style.borderRadius = '3px';
        userDiv.style.padding = '0 10px';
        userDiv.style.margin = '1px 100px';
        userDiv.style.textAlign = 'center';
        userDiv.id = `${user.id.name} ${user.id.value}`;
        userDiv.innerHTML = `<h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <img src="${user.picture.thumbnail}">
        <p>Phone: ${user.phone}<br/>Email: ${user.email}</p>`;
        usersBlock.appendChild(userDiv);
    });
}
getData();