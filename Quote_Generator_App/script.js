const api_url = "https://api.quotable.io/random"
const quote = document.getElementById("quote")
const author = document.getElementById("author")


async function getQuote(url) {
    const resp = await fetch(url);
    var data = await resp.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "-by" + quote.innerHTML, "Tweet window", "width=600, height=300")
}