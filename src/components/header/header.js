Drupal.behaviors.accordion = {
  attach(context) {
    console.log('header fired');
    const openMenu = context.getElementById('small-screen-menu');
    console.log('openMenu', openMenu);
    openMenu.addEventListener('click', console.log('openMe'));
  },
};
