$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    stagePadding:60,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1400:{
            items:3
        }
    }
});
// filler
document.addEventListener("DOMContentLoaded", function() {
    const filler = document.getElementById('filler');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          filler.classList.add('in-view');


// there are certain issues in it : one is changing scrollPercentPerSection 
document.addEventListener('scroll', function() {
    // Calculate the total document height minus the viewport height
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    // Get the current scroll position
    const scrollTop = window.scrollY;
    // Calculate the total number of sections
    const sections = document.querySelectorAll('.section');
    const totalSections = sections.length;
    // Determine the scroll percentage for the entire document
    const totalScrollPercent = scrollTop / docHeight;

    // Calculate the scroll percentage per section
    const scrollPercentPerSection = 1 / totalSections;

    // Loop through each section
    sections.forEach((section, index) => {

      // Determine the scroll percentage for the current section
      const sectionStart = scrollPercentPerSection * index;
      const sectionEnd = scrollPercentPerSection * (index + 1);
      const sectionScrollPercent = Math.min(Math.max((totalScrollPercent - sectionStart) / scrollPercentPerSection, 0), 1);

      // Update the height of the fill element
      const fillElement = section.querySelector('.fill');
      fillElement.style.height = `${sectionScrollPercent * 100}%`;

      // Update the text styling based on the section's scroll percentage
      const scrollText = section.querySelector('.scroll-text');
      if (sectionScrollPercent > 0 && sectionScrollPercent < 1) {
        scrollText.classList.remove('inactive');
        scrollText.classList.remove('less-highlighted');
      } else if (sectionScrollPercent >= 1) {
        scrollText.classList.add('inactive');
        scrollText.classList.remove('less-highlighted');
        // Reset the fill element's height
        fillElement.style.height = '0%';
      } else {
        scrollText.classList.add('less-highlighted');
        scrollText.classList.remove('inactive');
      }
    });
  });

// filler end








        } else {
          filler.classList.remove('in-view');
        }
      });
    }, { threshold: 0.1 }); // Adjust the threshold as needed
  
    observer.observe(filler);
  });
  
// animated counters
document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('counter1');
  const endNumber = 16;
  const duration = 1500; // Duration in milliseconds

  let hasCounted = false;

  function countUp() {
      const startNumber = 0;
      const stepTime = Math.abs(Math.floor(duration / endNumber));
      let currentNumber = startNumber;
      
      const timer = setInterval(() => {
          currentNumber++;
          counterElement.innerText = `${currentNumber}+`;
          if (currentNumber >= endNumber) {
              clearInterval(timer);
              counterElement.innerText = `${endNumber}+`;
          }
      }, stepTime);
  }

  function checkInView() {
      const rect = counterElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const inView = rect.top >= 0 && rect.bottom <= viewportHeight;

      if (inView && !hasCounted) {
          hasCounted = true;
          counterElement.classList.add('active');
          countUp();
      }
  }

  // Check if the counter is in view on scroll
  window.addEventListener('scroll', checkInView);

  // Also check if it's in view on initial load
  checkInView();
});

      // >>> counter2
      document.addEventListener('DOMContentLoaded', () => {
        const counterElement = document.getElementById('counter2');
        const endNumber = 100;
        const duration = 1500; // Duration in milliseconds
    
        let hasCounted = false;
    
        function countUp() {
            const startNumber = 0;
            const stepTime = Math.abs(Math.floor(duration / endNumber));
            let currentNumber = startNumber;
            
            const timer = setInterval(() => {
                currentNumber++;
                counterElement.innerText = `${currentNumber}+`;
                if (currentNumber >= endNumber) {
                    clearInterval(timer);
                    counterElement.innerText = `${endNumber}+`;
                }
            }, stepTime);
        }
    
        function checkInView() {
            const rect = counterElement.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const inView = rect.top >= 0 && rect.bottom <= viewportHeight;
    
            if (inView && !hasCounted) {
                hasCounted = true;
                counterElement.classList.add('active');
                countUp();
            }
        }
    
        // Check if the counter is in view on scroll
        window.addEventListener('scroll', checkInView);
    
        // Also check if it's in view on initial load
        checkInView();
    });

    // >>> counter 3
    document.addEventListener('DOMContentLoaded', () => {
      const counterElement = document.getElementById('counter3');
      const endNumber = 30;
      const duration = 1500; // Duration in milliseconds
  
      let hasCounted = false;
  
      function countUp() {
          const startNumber = 0;
          const stepTime = Math.abs(Math.floor(duration / endNumber));
          let currentNumber = startNumber;
          
          const timer = setInterval(() => {
              currentNumber++;
              counterElement.innerText = `${currentNumber} Million+`;
              if (currentNumber >= endNumber) {
                  clearInterval(timer);
                  counterElement.innerText = `${endNumber} Million+`;
              }
          }, stepTime);
      }
  
      function checkInView() {
          const rect = counterElement.getBoundingClientRect();
          const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
          const inView = rect.top >= 0 && rect.bottom <= viewportHeight;
  
          if (inView && !hasCounted) {
              hasCounted = true;
              counterElement.classList.add('active');
              countUp();
          }
      }
  
      // Check if the counter is in view on scroll
      window.addEventListener('scroll', checkInView);
  
      // Also check if it's in view on initial load
      checkInView();
  });

//   QA Section
// $(document).ready(function(){
//     // button one
//     $("#QA_1_toggle").click(function() {
//         var $button = $(this);
//         var $answer = $("#answer1");
        
//         // Toggle the visibility of the images
//         $("#QA_toggle_icon1").toggle();
//         $("#QA_toggle_icon_1").toggle();

//         // Toggle the visibility of the answer div with smooth height transition
//         $answer.slideToggle(1000, function() {
//             // Calculate the new height of the button
//             var newHeight = $answer.is(':visible') ? $answer.outerHeight(true) + 140 : 100; // Adjust the base height (51) to fit your needs
//             $button.animate({ height: newHeight }, 500); // Adjust height with animation
//         });
//         $button.toggleClass("QA_active_border");
//     });
//     // button two
//     $("#QA_2_toggle").click(function() {
//         var $button = $(this);
//         var $answer = $("#answer2");

//         // Toggle the visibility of the images
//         $("#QA_toggle_icon2").toggle();
//         $("#QA_toggle_icon_2").toggle();

//         // Toggle the visibility of the answer div with smooth height transition
//         $answer.slideToggle(1000, function() {
//             // Calculate the new height of the button
//             var newHeight = $answer.is(':visible') ? $answer.outerHeight(true) + 140 : 100; // Adjust the base height (51) to fit your needs
//             $button.animate({ height: newHeight }, 500); // Adjust height with animation
//         });
//         $button.toggleClass("QA_active_border");
//     });
//     // button three
//     $("#QA_3_toggle").click(function() {
//         var $button = $(this);
//         var $answer = $("#answer3");

//         // Toggle the visibility of the images
//         $("#QA_toggle_icon3").toggle();
//         $("#QA_toggle_icon_3").toggle();

//         // Toggle the visibility of the answer div with smooth height transition
//         $answer.slideToggle(1000, function() {
//             // Calculate the new height of the button
//             var newHeight = $answer.is(':visible') ? $answer.outerHeight(true) + 140 : 100; // Adjust the base height (51) to fit your needs
//             $button.animate({ height: newHeight }, 500); // Adjust height with animation
//         });
//         $button.toggleClass("QA_active_border");
//     });
//     // button four
//     $("#QA_4_toggle").click(function() {
//         var $button = $(this);
//         var $answer = $("#answer4");

//         // Toggle the visibility of the images
//         $("#QA_toggle_icon4").toggle();
//         $("#QA_toggle_icon_4").toggle();

//         // Toggle the visibility of the answer div with smooth height transition
//         $answer.slideToggle(1000, function() {
//             // Calculate the new height of the button
//             var newHeight = $answer.is(':visible') ? $answer.outerHeight(true) + 140 : 100; // Adjust the base height (51) to fit your needs
//             $button.animate({ height: newHeight }, 500); // Adjust height with animation
//         });
//         $button.toggleClass("QA_active_border");
//     });
//   });
//   faq
const toggles = document.querySelectorAll(".faq,.faq-toggle, .faq-text, .faq-title");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentElement.classList.toggle("activee");
  });
});

// slider
$("#slider").on("input change", (e) => {
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.foreground-img').css('width', `${sliderPos}%`);
    // Update the position of the slider button
    $('.slider-button').css('left', `calc(${sliderPos}% - 15px)`); // Adjusted to match button width
});
document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider-inner");
  const speed = 0.7;
  let isHovered = false;

  sliders.forEach((slider) => {
    let scrollAmount = 0;

    // Duplicate the content
    const sliderContent = slider.innerHTML;
    slider.innerHTML += sliderContent;

    const startScrolling = () => {
      if (!isHovered) {
        scrollAmount -= speed;
        if (Math.abs(scrollAmount) >= slider.scrollHeight / 2) {
          scrollAmount = 0;
        }
        slider.style.transform = `translateY(${scrollAmount}px)`;
      }
      requestAnimationFrame(startScrolling);
    };

    slider.addEventListener("mouseover", () => {
      isHovered = true;
    });

    slider.addEventListener("mouseout", () => {
      isHovered = false;
    });

    startScrolling();
  });
});
