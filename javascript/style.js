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
  }
      // JavaScript for Parallax Effect
  // window.addEventListener('scroll', function () {
  //   const parallax = document.querySelector('.parallax-background');
  //   if (parallax) {
  //     const offset = window.scrollY;
  //     parallax.style.backgroundPositionY = '${offset * 0.5}px'; // Adjust the multiplier to control the parallax speed
  //   }
  // });
  window.addEventListener('scroll', function () {
    const content = document.querySelector('.parallax');
    if (content) {
      const offset = window.scrollY;
      content.style.backgroundPositionY = '${offset * 1}px'; // Adjust the multiplier to control the parallax speed
    }
  });
});
