export function initMenuDropdown() {
  const menuToggle = document.querySelector('.nav-menu-open');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  menuToggle.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });
}