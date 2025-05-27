document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  const searchBox = document.querySelector('.search-box');
  const categoryFilter = document.querySelector('.category-filter');
  const photoCards = document.querySelectorAll('.photo-card');

  function filterPhotos() {
    const searchTerm = searchBox.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    photoCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const category = card.dataset.category;
      
      const matchesSearch = title.includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  searchBox.addEventListener('input', filterPhotos);
  categoryFilter.addEventListener('change', filterPhotos);

  // Download button functionality
  document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const imgSrc = this.closest('.photo-card').querySelector('img').src;
      const fileName = imgSrc.split('/').pop();
      
      // Simulasi download (untuk demo)
      alert(`Downloading: ${fileName}\n\nNote: Ini hanya simulasi. Pada implementasi real, gunakan backend untuk handle download.`);
    });
  });
});