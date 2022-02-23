function getQuote() {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => showQuote(data))
}

const showQuote = quote => {
    document.getElementById('quote').innerText = `"${quote.quote}"`;
}