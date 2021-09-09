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
