// Declaration
const searchInput = document.querySelector('.search');
const searchInputTwo = document.querySelector('.search2');
const catalogs = document.querySelectorAll('.catalog');

// Add event listener for input event
searchInput.addEventListener('input', function(event) {
  const searchTerm = event.target.value.toLowerCase();

  // loop through wears type and display search result
  catalogs.forEach(function(catalog) {
    const title = catalog.querySelector('h3').textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      catalog.style.display = 'block';
    } else {
      catalog.style.display = 'none';
    }
  });
});;


// // Add event listener for input event
// searchInputTwo.addEventListener('input', function(event) {
//   const searchTerm = event.target.value.toLowerCase();

//   // loop through wears type and display search result
//   catalogs.forEach(function(catalog) {
//     const title = catalog.querySelector('h3').textContent.toLowerCase();

//     if (title.includes(searchTerm)) {
//       catalog.style.display = 'block';
//     } else {
//       catalog.style.display = 'none';
//     }
//   });
// });


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





document.addEventListener('DOMContentLoaded', () => {
  // Get the "Add To Cart" buttons
  const addToCartButtons = document.querySelectorAll('.catalog button');

  // Get the cart icon and count elements
  const cartIcon = document.getElementById('cart-icon');
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

      // Update cart icon to indicate an item has been added
      cartIcon.classList.add('cart-added');

      // Reset cart icon after 1 second
      setTimeout(() => {
        cartIcon.classList.remove('cart-added');
      }, 1000);
    });
  });
});

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



