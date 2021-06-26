const endPoint = "http://localhost:3000/api/v1/cocktails" 

document.addEventListener('DOMContentLoaded', () => {
    getCocktails()


    const createCocktailForm = document.querySelector ("#create-cocktail-form")

    createCocktailForm.addEventListener("submit", (e) => createFormHandler(e))
})

document.addEventListener("click", function(e) {
  const cocktailCard = document.getElementById(`${e.target.dataset.id}`)
  if(e.target.matches("#delete-btn")) {
    e.preventDefault()
    deleteCocktail(e.target.dataset.id)
    cocktailCard.remove(cocktailCard)
  }
})


 function getCocktails() {
    fetch (endPoint)
    .then (response => response.json())
    .then (cocktails => {
      cocktails.data.forEach(cocktail => {
        let newCocktail = new Cocktail(cocktail, cocktail.attributes)
        document.querySelector("#cocktail-container").innerHTML += newCocktail.renderCocktailCard()
      })
    })
  }

  function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const barInput = document.querySelector('#input-bar').value
    const neighborhoodId = parseInt(document.querySelector('#neighborhoods').value)
    postCocktails (titleInput, descriptionInput, barInput, neighborhoodId)
  }

function postCocktails(title, description, bar, neighborhood_id) {
  let bodyObj = {title, description, bar, neighborhood_id}

  fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyObj)
  })
  .then(response => response.json())
  .then(cocktail => {
    const cocktailData =cocktail.data

    let newCocktail = new Cocktail(cocktailData, cocktailData.attributes)

    document.querySelector('#cocktail-container').innerHTML += newCocktail.renderCocktailCard()
    })

}

const nameForm = document.querySelector('#search-bar')
let filteredCocktails = []

nameForm.addEventListener('keyup', (event) => {
  event.preventDefault()
  seachForCocktail(event)
//  const term = event.target.value.toLowerCase()
//  let searchResult = filteredCocktails.filter(filteredCocktail => {
//  return filteredCocktail.name.toLowerCase().includes(term)

  })
function seachForCocktail (event){
event.preventDefault()
console.log(event.target.value)
console.log(cocktail.all)
let cocktails = Cocktails.all
let filteredCocktails = cocktails.filter(cocktail =>{

  let cocktails = Cocktails.all
  Cocktails.filter( cocktail => {})
  
  function filterCocktails(e){
      e.preventDefault();
      console.log(e.target.value)
      console.log(Cocktail.all)
      let cocktails = Cocktail.all 
      let filteredCocktails = cocktails.filter( task => {
          return task.activity.toLowerCase().startsWith(e.target.value.toLowerCase())
      });
      cocktailListArea.innerHTML = ""
      filteredCocktails.forEach(t => {
          t.addTask()
      })
  }
})
}


function deleteCocktail(id) {

 fetch(`${endPoint}/${id}`, {
    method: "DELETE" 
})
  .then(response => response.json())
}