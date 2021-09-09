const endPoint = "http://localhost:3000/api/v1/neighborhoods" 

document.addEventListener('DOMContentLoaded', () => {
    getCocktails()


    const createCocktailForm = document.querySelector ("#create-cocktail-form")

    createCocktailForm.addEventListener("submit", (e) => createFormHandler(e))
})

    fetch(endPoint)
    .then(response => response.json())
    .then(cocktails => {
      cocktails.data.forEach(cocktail => {
        
        render(cocktail)
      })
    })
}

function render(cocktail) {
    const cocktailMarkup = `
      <div data-id=${cocktail.id}>
        <h3>${cocktail.attributes.title}</h3>
        <p><strong>Description:</strong> ${cocktail.attributes.description}</p>
        <p><strong>Bar:</strong> ${cocktail.attributes.bar}</p>
        
        <p><strong>Neighborhood:</strong> ${cocktail.attributes.neighborhood.name}</p>
        <button data-id=${cocktail.id}>edit</button>
      </div>
      <br><br>`;
  
    document.querySelector('#cocktail-container').innerHTML += cocktailMarkup
  }
  
  
  function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const barInput = document.querySelector('#input-bar').value
    const neighborhoodId = parseInt(document.querySelector('#neighborhoods').value)
    postAdventures (titleInput, descriptionInput, barInput, neighborhoodId)
  }

  function postCocktails(title, description, bar, neighborhood_id) {
    let bodyObj = {title, description, bar, category_id}
    
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
}


function deleteCocktail(id) {

 fetch(`${endPoint}/${id}`, {
    method: "DELETE" 
})
  .then(response => response.json())
  .then(response => console.log(response))

}