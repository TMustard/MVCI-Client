// const apiURL = "https://fathomless-chamber-33616.herokuapp.com/"
const apiURL = "http://localhost:8080"
var characterData;
var characterSelected;

fetch(apiURL)
  .then(response => response.json())
  .then(response => {
    characterData = response.moves;
    console.log(characterData);
  });

function setCharacter(sel) {
  characterSelected = sel.options[sel.selectedIndex].text;
  console.log(characterSelected);
  return characterSelected;
}

document.querySelector("#dropD").addEventListener("submit", function(event){
  event.preventDefault();
  populateDescription();
});


// function populateDescription() {
//     // var descriptionP = document.querySelector('.description-content')
//     if( === characterSelected) {
//         console.log('hi')
//     }
// }
function populateDescription() {
  var descriptionP = document.querySelector(".description-content");
  console.log(characterData);
  characterData.map(item => {
    console.log(item)
    if (item.name === characterSelected) {
      var moveList = item.move1;
      descriptionP.innerHTML = moveList;
    }
  });
}
