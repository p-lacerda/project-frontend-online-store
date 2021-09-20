export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const responseJson = await response.json();
  return responseJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const responseJson = await response.json();
  return responseJson;
}

// export async function getProductsFromCategoryAndQuery(...args) {
//   const queryURL = `https://api.mercadolibre.com/sites/MLB/search?q=${args[0]}`;
//   const categoryQueryURL = `https://api.mercadolibre.com/sites/MLB/search?category=${args[1]}&q=${args[0]}`;

//   if (args.length === 2) return apiFetch(categoryQueryURL);

//   return apiFetch(queryURL);
// }
