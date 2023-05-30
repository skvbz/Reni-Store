// Get the necessary elements
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const quantityAmount = document.querySelector('.qty-amount');
const priceElement = document.querySelector('.price h1');

// Initial price and quantity
let price = 400.00;
let quantity = 1;

// Function to update the quantity and price
function updateQuantityAndPrice() {
  quantityAmount.textContent = quantity;
  priceElement.textContent = `$${price.toFixed(2)}`;
}

// Event listener for the decrease button
decreaseButton.addEventListener('click', function() {
  if (quantity > 1) {
    quantity--;
    price -= 400.00;
    updateQuantityAndPrice();
  }
});

// Event listener for the increase button
increaseButton.addEventListener('click', function() {
  quantity++;
  price += 400.00;
  updateQuantityAndPrice();
});




// Get the necessary elements
const imageSizeElement = document.getElementById('image-size');
const imageElement = document.getElementById('myImage');
let imageSize = 50;

// Function to update the image size
function updateImageSize() {
  imageElement.style.width = `${imageSize}%`;
  imageSizeElement.textContent = `${imageSize}%`;
}

// Function to increase image size
function increaseImageSize() {
  if (imageSize < 100) {
    imageSize += 10;
    updateImageSize();
  }
}

// Function to decrease image size
function decreaseImageSize() {
  if (imageSize > 10) {
    imageSize -= 10;
    updateImageSize();
  }
}

// Get the "Add To Cart" buttons
const addToCartButtons = document.querySelectorAll('.catalog button');

// Get the cart image and count elements
const cartImage = document.getElementById('cart-image');
const cartCount = document.getElementById('cart-count');

// Initialize cart count
let itemCount = 0;

// Add event listeners to each "Add To Cart" button
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Increment item count
    itemCount++;

    // Update cart count
    cartCount.textContent = itemCount;

    // Update cart image to indicate an item has been added
    cartImage.src = './img/cart-added.png';

    // Reset cart image after 1 second
    setTimeout(() => {
      cartImage.src = './img/cart.png';
    }, 1000);
  });
});

// Hamburger
const open = document.getElementById('menuIcon')
const menu = document.querySelector('.mobile-nav')
const close = document.getElementById('closeIcon')

open.addEventListener('click',()=>{
  console.log('open')
  menu.classList.add('show-nav')
})

close.addEventListener('click',()=>{
  console.log('close')
  menu.classList.remove('show-nav')
})
