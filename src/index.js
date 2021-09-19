const endPoint = "http://localhost:3000/api/v1/cocktails" 

document.addEventListener('DOMContentLoaded', () => {
    getCocktails()


    const createCocktailForm = document.querySelector ("#create-cocktail-form")

    createCocktailForm.addEventListener("submit", (e) => createFormHandler(e))
})

document.addEventListener("click", function(e) {
  const cocktailCard = document.getElementById(`${e.target.dataset.id}`)
  console.log(cocktailCard) 
  if(e.target.matches("#delete-btn")) {
    e.preventDefault()
    deleteCocktail(e.target.dataset.id)
    cocktailCard.remove(cocktailCard)
  }
})

function getCocktails (e) {
    fetch(endPoint)
    .then(response => response.json())
    .then(cocktails => {
      
      cocktails.data.forEach(cocktail => {
        
    
        let newCocktail = new Cocktail(cocktail, cocktail.attributes)

        document.querySelector('#cocktail-container').innerHTML += newCocktail.renderCocktail();

      })
    })
}


  
  function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const barInput = document.querySelector('#input-bar').value
    const neighborhoodId = parseInt(document.querySelector('#neighborhood').value)
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
      const cocktailData = cocktail.data
      
      let newCocktail = new Cocktail(cocktailData, cocktailData.attributes)

      document.querySelector('#cocktail-container').innerHTML += newCocktail.renderCocktailCard()
})
      this.location.reload()
}


function deleteCocktail(id) {
  
 fetch(`${endPoint}/${id}`, {
    method: "DELETE" 
})
  .then(response => response.json())

  this.location.reload()

}