$(document).ready(function(){
    const toggles = document.querySelectorAll(".faq,.faq-toggle, .faq-text, .faq-title");
    toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
    toggle.parentElement.classList.toggle("activee");
  });
});
})

// owl carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})