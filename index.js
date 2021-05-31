const endPoint = "http://localhost:3000/api/v1/neighborhoods" 

document.addEventListener('DOMContentLoaded', () => {
    getCocktails()

    fetch(endPoint)
    .then(response => response.json())
    .then(cocktails => {
      cocktails.data.forEach(cocktail => {
        
        render(cocktail)
      })
    })
}
