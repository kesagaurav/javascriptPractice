class Product {
  title = 'DEFAULT'; // feidls define property onf a class.
  imageUrl; //feilds
  description;
  price;
  constructor(title, image, description, price) {
    this.title = title; //property
    this.imageUrl = image;
    this.description = description;
    this.price = price;
  }
}
//console.log(new Product());

class ElementAttribute {
  attrName;
  attrValue;
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHook,shouldRender=2) {
    console.log('called');
    this.hook = renderHook;
    if(shouldRender){
      this.render();
    }
   
  }
  render(){}
  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hook).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];
  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total:/$ ${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }
  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  constructor(renderHook) {
    super(renderHook,false);
    this.orderProducts=()=>{
      console.log('ordering....');
      console.log(this.items);
    }
    this.render();
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  orderProducts=()=>{
    console.log('ordering');
    console.log(this.items);
  }

  render() {
    // const cartEl = document.createElement('section');
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
    <h2>Total:\$ ${0}</h2>
    <button>Order Now!</button>
    `;
    //cartEl.className = 'cart';
    const orderButton=cartEl.querySelector('button');
    // orderButton.addEventListener('click',()=>this.orderProducts)
    orderButton.addEventListener('click',this.orderProducts);
    this.totalOutput = cartEl.querySelector('h2');
   
  }
}

class ProductItem extends Component {
  constructor(product, renderHook) {
    super(renderHook,false);
    this.product = product;
    this.render();
  }

  addToCart() {
    // console.log('adding prod');
    // console.log(this.product);
    App.addProductToCart(this.product); //using static
  }

  render() {
    // const prodEl = document.createElement('li');
    const prodEl = this.createRootElement('li', 'product-item');
    prodEl.innerHTML = `
          <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}"
          <div clas="product-item__content">
          <h2>${this.product.title}</h2>
          <h2>${this.product.price}</h2>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
          </div>
          </div>
      `;
    const cartButton = prodEl.querySelector('button');
    cartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList extends Component {
  products = [];
  constructor(renderHook) {
    super(renderHook);
    this.fetchProducts();
  }
  fetchProducts() {
    this.products = [
      new Product(
        'Iphone',
        'data:image/jpeg;base64,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',
        '15000',
        'Iphone is security phone'
      ),
      new Product(
        'macbook',
        'data:image/jpeg;base64,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',
        '15000',
        'Macbook is security laptop'
      ),
    ];
    this.renderProducts();
  }
  renderProducts(){
    for (const prod of this.products) {
      const productItem = new ProductItem(prod, 'prod-list');
      // productItem.render();
      // prodList.append(prodEl);
    }
  }
  render() {
    this.createRootElement('ul', 'prod-list', [
      new ElementAttribute('id', 'prod-list'),
    ]);
    if(this.products && this.products.length>0){
      this.renderProducts();
    }
    
  }
}

class Shop {
  constructor() {
    this.render();
  }

  render() {
    // const renderHook = document.getElementById('app');
    this.cart = new ShoppingCart('app');
    //this.cart.render();
    const productList = new ProductList('app');
    // productList.render();
    //renderHook.append(cartEl);
    //renderHook.append(prodEl);
  }
}

class App {
  static init() {
    const shop = new Shop();
    //shop.render();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}
App.init();
