function fetchQuote() {
    fetch ("https://api.quotable.io/random")
    .then(response => response.json() )
    .then (data => {
        document.getElementById("q").innerText=data.content 
        document.getElementById("author").innerText="-"+(data.author)
    })

}

document.onload = fetchQuote()