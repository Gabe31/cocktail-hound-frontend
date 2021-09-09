class Cocktail {

    constructor(cocktail, cocktailAttributes) {
        this.id = cocktail.id
        this.title = cocktailAttributes.name
        this.description = cocktailAttributes.description
        this.bar = cocktailAttributes.bar
        this.neighborhood = cocktailAttributes.neighborhood
        Cocktail.all.push(this)
    }

    renderCocktailCard() {
        return `
          <div data-id=${this.id}>
            <h3>${this.title}</h3>
            <p><strong>Description:</strong> ${this.description}</p>
            <p><strong>Bar:</strong> ${this.bar}</p>
            <p><strong>Neighborhood:</strong> ${this.category.neighborhood}</p>
          </div>
          <div class="btn-group">
              <button data-id=${this.id} id="delete-btn" type="button" class="btn">Delete Cocktail</button>
          </div>
          <br><br>`;     
      }
}

Cocktail.all = [];