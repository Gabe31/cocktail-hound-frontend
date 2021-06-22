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
}


Search bar 

-type in part of a name Cocktails.sort

-input id 