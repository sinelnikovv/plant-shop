let splideA=document.querySelectorAll(".splide");
if (splideA){
  
  for ( var i = 0; i < splideA.length; i++ ) {
    new Splide( splideA[ i ], {
      type     : 'loop',
      height   : 'auto',
      focus    : 'center',
      autoWidth: true,
      gap: "1.2rem",
      pagination: false,
      arrows: false,
    } ).mount();
  }
}




  AOS.init();