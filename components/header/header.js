console.log('header fired');
const openMenu = document.getElementById('small-screen-menu');
console.log('openMenu', openMenu);

if (openMenu) {
  openMenu.addEventListener('click', console.log('openMe'));
}
