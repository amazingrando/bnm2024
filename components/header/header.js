Drupal.behaviors.smallScreenMenu = {
  attach(context) {
    const openOverlay = context.getElementById(
      'small-screen-menu-control-open',
    );
    const closeOverlay = context.getElementById(
      'small-screen-menu-control-close',
    );
    const overlay = context.getElementById('small-screen-overlay');
    const body = context.querySelector('body');

    const openOverlayHandler = () => {
      overlay.classList.remove('hidden');
      body.classList.add('overflow-hidden');
    };

    const closeOverlayHandler = () => {
      overlay.classList.add('hidden');
      body.classList.remove('overflow-hidden');
    };

    openOverlay.addEventListener('click', openOverlayHandler);
    closeOverlay.addEventListener('click', closeOverlayHandler);
  },
};
