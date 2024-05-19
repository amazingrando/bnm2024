Drupal.behaviors.smallScreenMenu = {
  attach(context) {
    const openOverlay = context.getElementById(
      'small-screen-menu-control-open',
    );
    const closeOverlay = context.getElementById(
      'small-screen-menu-control-close',
    );
    const overlay = context.getElementById('small-screen-overlay');

    const openOverlayHandler = () => {
      overlay.classList.remove('hidden');
    };

    const closeOverlayHandler = () => {
      overlay.classList.add('hidden');
    };

    openOverlay.addEventListener('click', openOverlayHandler);
    closeOverlay.addEventListener('click', closeOverlayHandler);
  },
};
