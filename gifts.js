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


// Add event listener for input event
searchInputTwo.addEventListener('input', function(event) {
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
});

