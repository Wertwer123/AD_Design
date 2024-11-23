const fadeSections = document.querySelectorAll(".adSectionOverlayFade");
console.log(fadeSections);
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