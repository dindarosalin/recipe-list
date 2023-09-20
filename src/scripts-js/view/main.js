import '../components/recipe-list.js';
import '../components/search-bar.js';
import DataSource from '../data/sources.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const recipeListElement = document.querySelector('recipe-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchRecipe(searchElement.value);
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