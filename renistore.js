// Get the search input element
const searchInput = document.querySelector('.search');

// Add event listener for keyup event
searchInput.addEventListener('input', function(event) {
  const searchTerm = event.target.value.toLowerCase();
  const wearsTypes = document.querySelectorAll('.wears-types');

  // loop through wears type and display search result
  wearsTypes.forEach(function(wearsType) {
    const link = wearsType.querySelector('a');
    const type = link.textContent.toLowerCase();

    if (type.includes(searchTerm)) {
      wearsType.style.display = 'block';
    } else {
      wearsType.style.display = 'none';
    }
  });
});
