const itemURL = (itemID) => `https://api.mercadolibre.com/items/${itemID}`;

const fetchItem = async (itemID) => {
  try {
    const url = itemURL(itemID);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  } 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
