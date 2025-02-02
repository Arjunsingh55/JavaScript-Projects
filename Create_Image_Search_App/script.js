const accessKey = "H5DKFLFNHuRGoX67Zyd1g4mUeRB02JnVzEzMEuaET4w";


const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    if (page === 1) {
        searchResult.innerHTML = " ";
    }
    const results = data.results;
    results.map((result) => {

        const image = document.createElement("img");
        image.src = result.urls.small;
        //const imageLink = document.createElement("a");
        // imageLink.href = resuslt.links.html;
        // imageLink.target = "_blank";
        // imageLink.appendChild(image);
        searchResult.appendChild(image)

    })
    showMoreBtn.style.display = "block";


}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImage();
})