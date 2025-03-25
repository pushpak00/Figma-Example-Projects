const sliderControls = document.querySelectorAll('.slider-controls');
const productSliders = document.querySelectorAll('.products-slider');
const wishlist = document.querySelector('.wishlist-button')

// Product Sliders Functionality
function setupProductSliders() {
    sliderControls.forEach((control, index) => {
      const prevButton = control.querySelector('.prev');
      const nextButton = control.querySelector('.next');
      const slider = productSliders[index] || document.querySelectorAll('.products-grid')[index - productSliders.length];
  
      if (prevButton && nextButton && slider) {
        prevButton.addEventListener('click', () => {
          slider.scrollBy({
            left: -300,
            behavior: 'smooth'
          });
        });
  
        nextButton.addEventListener('click', () => {
          slider.scrollBy({
            left: 300,
            behavior: 'smooth'
          });
        });
      }
    });
  }


wishlist.addEventListener('click', () => {
    
})