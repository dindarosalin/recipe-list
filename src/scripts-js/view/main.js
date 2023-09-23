import '../components/recipe-list.js';
import '../components/search-bar.js';
import DataSource from '../data/sources.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const recipeListElement = document.querySelector('recipe-list');

  const onButtonSearchClicked = async () => {
    try {
      let result;
      const selectedCategory = searchElement.selectedCategory;
      
      switch (selectedCategory) {
        case 'name':
          result = await DataSource.searchRecipeByName(searchElement.value);
          break;
        case 'ingredient':
          result = await DataSource.searchRecipeByIngredient(searchElement.value);
          break;
        case 'category':
          result = await DataSource.searchRecipeByCategory(searchElement.value);
          break;
        case 'area':
          result = await DataSource.searchRecipeByArea(searchElement.value);
          break;
        default:
          result = await DataSource.searchRecipeByName(searchElement.value);
      }

      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    recipeListElement.recipe = results;
  };

  const fallbackResult = message => {
    recipeListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;