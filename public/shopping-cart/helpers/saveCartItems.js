const saveCartItems = (elem) => {
  localStorage.setItem('cartItems', elem);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
