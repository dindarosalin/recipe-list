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
                /* Your CSS styles here */
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
                    <a href="${this._recipe.strYoutube}" target="_blank">Watch Recipe Video</a>
                    <a href="${this._recipe.strSource}" target="_blank">Recipe Source</a>
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
