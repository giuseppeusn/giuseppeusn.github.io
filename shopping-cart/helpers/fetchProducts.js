const apiURL = (query) => `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

const fetchProducts = async (query) => {
  try {
    const url = apiURL(query);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
