class DataSource {
  static searchRecipe(keyword) {
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
        return Promise.reject('Failed to fetch recipes.');
      });
  }
}

export default DataSource;