document.getElementById("year").innerHTML = new Date().getFullYear();
// JavaScript to handle the toggling of the navigation menu
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const navList = document.getElementById('nav-list');

  if (menuButton && navList) { // Check if elements are found
    menuButton.addEventListener('click', function () {
        if (navList.style.display === 'none' || navList.style.display === '') {
            navList.style.display = 'flex';
        } else {
            navList.style.display = 'none';
        }
    });
}});