// Pencarian Produk
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', function() {
  const query = searchInput.value.toLowerCase();
  const items = document.querySelectorAll('.content .air-max-lv, .content .double-stacked, .content .play-all-day');

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

// Toggle Menu Hamburger
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.nav-bar');

hamburgerMenu.addEventListener('click', function() {
  navBar.classList.toggle('active');
  hamburgerMenu.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});
