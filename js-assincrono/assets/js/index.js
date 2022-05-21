const URL = "https://api.thecatapi.com/v1/images/search";

const catWrapper = document.getElementById("cat");
const btn = document.getElementById("btn");

const getCat = async () => {
    let response = await fetch(URL);
    let data = response.json();

    return data;
}

const showCat = async () => {
    let data = await getCat();

    catWrapper.setAttribute("src", `${data[0].url}`)
}

showCat();