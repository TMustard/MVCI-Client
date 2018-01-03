const apiURL = 'https://fathomless-chamber-33616.herokuapp.com/'

var characterData
var characterSelected


fetch(apiURL)
    .then(response => response.json())
    .then(response => {
        characterData = response
        console.log(characterData)

    })

function setCharacter(sel) {
    characterSelected = sel.options[sel.selectedIndex].text
}

document.querySelector('#dropD').addEventListener('submit', function(event){
    console.log('working')
    event.preventDefault()
    populateDescription()
})

function populateDescription() {
    var descriptionP = document.querySelector('.description-content')
    console.log(descriptionP)
    characterData.map(item => {
        if (item.name === characterSelected) {
            var moveList = item.move1
            descriptionP.innerHTML = moveList
        }
    })
}
