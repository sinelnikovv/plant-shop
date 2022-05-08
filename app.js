var splide = new Splide( '.splide', {
    type     : 'loop',
    height   : 'auto',
    focus    : 'center',
    autoWidth: true,
    gap: "1.2rem",
    pagination: false,
    arrows: false,
  } );
  
  splide.mount();

  AOS.init();