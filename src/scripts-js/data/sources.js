class DataSource {
  static searchRecipeByName(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status} - ${response.statusText})`);
        }
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return Promise.reject('Failed to fetch recipes by name.');
      });
  }

  static searchRecipeByIngredient(ingredient) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status} - ${response.statusText})`);
        }
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${ingredient} is not found in any recipes`);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return Promise.reject('Failed to fetch recipes by ingredient.');
      });
  }

  static searchRecipeByCategory(category) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status} - ${response.statusText})`);
        }
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`No recipes found in the category ${category}`);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return Promise.reject('Failed to fetch recipes by category.');
      });
  }

  static searchRecipeByArea(area) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status} - ${response.statusText})`);
        }
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`No recipes found in the area ${area}`);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return Promise.reject('Failed to fetch recipes by area.');
      });
  }
}

export default DataSource;
