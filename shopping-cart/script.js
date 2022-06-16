const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  const div = document.createElement('div');
  img.className = 'item__image';
  img.src = imageSource;
  div.className = 'thumb';
  div.appendChild(img);
  return div;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

const calculatePrice = (price, isSum) => {
  const elem = document.querySelector('.total-price');
  const lastPrice = parseFloat(elem.innerText.replace(/[.R$]/g, '').replace(/,/g, '.'));
  const newPrice = isSum ? (lastPrice + price) : (lastPrice - price);

  elem.innerText = formatter.format(newPrice);
};

const countCart = () => {
  const items = document.querySelectorAll('.cart__item');
  const count = document.getElementById('count-cart');
  count.innerText = items.length;
};

async function cartItemClickListener() {
  this.remove();

  const items = JSON.parse(getSavedCartItems() || '[]');
  const sku = this.id;
  const removedItem = items.find((item) => item.sku === sku);
  const newItems = items.length > 1 ? items.filter((item) => item.sku !== removedItem.sku) : [];

  const obj = await fetchItem(sku);

  saveCartItems(JSON.stringify(newItems));
  calculatePrice(obj.price, false);
  countCart();
}

function createCartItemElement({ sku, name, salePrice, thumb }) {
  const li = document.createElement('li');
  const divDesc = document.createElement('div');
  const divImg = document.createElement('div');
  divDesc.className = 'cart-desc';

  divImg.className = 'cart-image';
  divImg.innerHTML = `<img src='${thumb}'>`;

  li.className = 'cart__item';
  divDesc.innerHTML = '<span class="remove">&times;<span>';
  divDesc.innerHTML += `<p class="cart-name">${name}</p>`;
  divDesc.innerHTML += `<p class="cart-price">${formatter.format(salePrice)}</p>`;
  li.addEventListener('click', cartItemClickListener);
  li.setAttribute('id', sku);
  li.appendChild(divDesc);
  li.appendChild(divImg);

  return li;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const addItemLocalStorage = (obj) => {
  const savedItems = JSON.parse(getSavedCartItems() || '[]');
  const newItem = { sku: obj.id };

  if (savedItems !== null) {
    savedItems.push(newItem);
    saveCartItems(JSON.stringify(savedItems));
  } else {
    saveCartItems(JSON.stringify(newItem));
  }  
};

const getItem = async (id) => {
  const obj = await fetchItem(id);
  const x = { sku: [obj.id], name: [obj.title], salePrice: [obj.price], thumb: [obj.thumbnail] };

  const cartItem = createCartItemElement(x);
  const element = document.querySelector('.cart__items');
  element.appendChild(cartItem);

  calculatePrice(obj.price, true);
  countCart();

  return obj;
};

const addSucess = (elem) => {
  const thumb = elem.querySelector('.thumb');

  thumb.innerHTML += `
  <div class="wrapper">
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
      <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
  </div>`;

  setTimeout(() => {
    thumb.querySelector('.wrapper').remove();
  }, 1500);
};

const addToCart = async (event) => {
  const id = getSkuFromProductItem(event.target.parentNode);
  addSucess(event.target.parentNode);

  const obj = await getItem(id);
  addItemLocalStorage(obj);
  countCart();
};

function createProductItemElement({ sku, name, price, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__price', price));
  section.appendChild(createCustomElement('span', 'item__title', name));
  const btn = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  btn.onclick = addToCart;
  section.appendChild(btn);

  return section;
}

const showLoad = () => {
  const item = document.querySelector('.items');
  const load = document.createElement('h3');
  load.innerHTML = `<div id="loader-wrapper">
  <div id="loader"></div>
</div>`;
  load.setAttribute('class', 'loading');
  item.appendChild(load);
};

const hideLoad = () => {
  const load = document.querySelector('.loading');
  load.remove();
};

const productsObj = (obj) => {
  const item = obj.results.map((elem) => (
    {
      sku: elem.id,
      name: `${elem.title.length > 50 ? `${elem.title.substring(0, 50)}...` : elem.title}`,
      price: formatter.format(elem.price),
      // price: `R$ ${elem.price % 1 === 0 ? `${elem.price}.00` : elem.price}`,
      image: `https://http2.mlstatic.com/D_${elem.thumbnail_id}-O.jpg`,
    }
  ));

  return item;
};

const showcase = async (product = 'computador') => {
  showLoad();
  const obj = await fetchProducts(product);
  hideLoad();

  const item = productsObj(obj);

  item.forEach((elem) => {
    const element = document.querySelector('.items');
    element.appendChild(createProductItemElement(elem));
  });
};

const cleanCart = () => {
  const cartList = document.querySelector('.cart__items');
  cartList.innerHTML = '';
  localStorage.removeItem('cartItems');
  const price = document.querySelector('.total-price');
  price.innerText = 'R$ 0,00';
  countCart();
};

const showCart = () => {
  const cart = JSON.parse(getSavedCartItems());
  if (cart !== null) {
    cart.forEach((item) => getItem(item.sku));
  }
};

const slideCart = () => {
  const cart = document.querySelector('.cart');
  const time = cart.classList[1] === 'active' ? 0 : 300;
  cart.classList.toggle('active');

  setTimeout(() => {
    const cartFooter = document.querySelector('.cart-footer');
    cartFooter.classList.toggle('active');
    const cartTitle = document.querySelector('.cart-title');
    cartTitle.classList.toggle('active');
  }, time);
};

const searchProduct = () => {
  const input = document.getElementById('input-search');
  
  if (input.value !== '') {
    const items = document.querySelector('.items');
    items.innerHTML = '';
    showcase(input.value);
  }  
};

const onEnter = (event) => {
  if (event.keyCode === 13) {
    searchProduct();
  }
};

window.onload = () => { 
  showcase();
  showCart();

  const emptyCart = document.querySelector('.empty-cart');
  emptyCart.onclick = cleanCart;

  const btn = document.getElementById('cart-btn');
  btn.onclick = slideCart;

  const input = document.getElementById('input-search');
  const search = document.getElementById('search');
  search.onclick = searchProduct;
  input.onkeyup = onEnter;
};
