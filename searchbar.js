fetch(http://localhost:3000/api/v1/cocktails')
  .then(response => response.json())
  .then(cocktails => {
  createCocktailCards(cocktails)
  filteredCocktails = cocktails
})
const nameForm = document.querySelector('search-bar')
let filteredCocktails = []

nameForm.addEventListener('input', event => {
  event.preventDefault()
  const term = event.target.value.toLowerCase()
  let searchResult = filteredCocktails.filter(filteredCocktail => {
  return filteredCocktail.name.toLowerCase().includes(term)
  
  })
createCocktailCards(searchResult)
})