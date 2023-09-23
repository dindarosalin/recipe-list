class RecipeItem extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
  
    set recipe(recipe) {
      this._recipe = recipe;
      this.render();
    }
  
    render() {
      if (!this._recipe) {
        this.shadowDOM.innerHTML = '';
        return;
      }
  
      this.shadowDOM.innerHTML = `
        <style>
          .recipe-container {
            display: flex;
            border: 1px solid #053B50;
            border-radius: 5px;
            margin: auto;
            margin-bottom: 20px;
            overflow: hidden;
            width: auto;
            max-width: 1000px;
          }
  
          .recipe-thumb {
            width: 200px;
            height: 200px;
            object-fit: cover;
            margin: 20px;
            margin-top: 40px;
            border-radius: 5px;
          }
  
          .recipe-info {
            flex: 1;
            margin: 20px;
          }
  
          h2 {
            font-size: 24px;
            margin-bottom: 10px;
            color: #053B50;
            font-weight: bold;
            text-transform: uppercase;
          }
  
          p {
            margin-bottom: 10px;
          }
  
          .recipe-ingredients {
            list-style-type: none;
            padding: 0;
          }
  
          .recipe-ingredients li {
            margin-bottom: 5px;
          }
  
          .button-container {
            display: flex;
            margin-top: 10px;
          }
  
          .button-container a {
            display: inline-block;
            background-color: #053B50;
            color: white;
            text-decoration: none;
            padding: 12px;
            border-radius: 5px;
            margin-right: 10px;
            cursor: pointer;
          }
  
          .button-container a:hover {
            background-color: #64CCC5;
            color: #053B50;
          }
        </style>
        <div class="recipe-container">
          <img class="recipe-thumb" src="${this._recipe.strMealThumb}" alt="${this._recipe.strMeal}">
          <div class="recipe-info">
            <h2>${this._recipe.strMeal}</h2>
            <p>${this._recipe.strCategory} - ${this._recipe.strArea}</p>
            <p>${this._recipe.strInstructions}</p>
            <ul class="recipe-ingredients">
              ${this.generateIngredientsList()}
            </ul>
            <div class="button-container">
              <a href="${this._recipe.strYoutube}" target="_blank">Watch Recipe Video</a>
              <a href="${this._recipe.strSource}" target="_blank">Recipe Source</a>
            </div>
          </div>
        </div>
      `;
    }
  
    generateIngredientsList() {
      let ingredientsList = '';
      for (let i = 1; i <= 20; i++) {
        const ingredient = this._recipe[`strIngredient${i}`];
        const measurement = this._recipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== '') {
          ingredientsList += `<li>${measurement} ${ingredient}</li>`;
        }
      }
      return ingredientsList;
    }
  }
  
  customElements.define('recipe-item', RecipeItem);