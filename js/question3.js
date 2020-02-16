// JS1 - Module 4 - MA4 - Question 3

const callUrl = "https://api.rawg.io/api/games/4200";

fetch(callUrl)
    .then(function(response) {
     return response.json();
    })
    .then(function(json) {
        createGameDetails(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function createGameDetails(json) {
    const nameOfGame = document.querySelector("h1");
    nameOfGame.innerHTML = json.name;

    const imgUrl = document.querySelector(".image");
    imgUrl.style.backgroundImage = `url("${json.background_image}")`;

    const description = document.querySelector(".description");
    description.innerHTML = json.description;
}