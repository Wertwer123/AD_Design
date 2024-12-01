

//Fading logic for fading out the overlay image of a section
const fadeSections = document.querySelectorAll(".adSectionOverlayFade");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'visible' class to trigger the fade-in animation
        entry.target.classList.add('hidden');
        
        // Stop observing the section after it's been animated
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 }); 

  fadeSections.forEach(section => {
    observer.observe(section);
  });

  //logic for animating the logo from center to top left on become visible
  const logos = document.querySelectorAll(".adSectionLogo");

const logoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'visible' class to trigger the fade-in animation
        entry.target.classList.add('seen');
        
        // Stop observing the section after it's been animated
        logoObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 }); 

    logos.forEach(section => {
      logoObserver.observe(section);
  });

  const quotationBorders = document.querySelectorAll(".quotationBorder");

  const quotationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) =>{
      if(entry.isIntersecting){
        entry.target.classList.add("seen");

        observer.unobserve(entry.target);
      }
    })
  })

  quotationBorders.forEach((border) =>{
    if(border){
      quotationObserver.observe(border);
    }
  })


