// const sliderControls = document.querySelectorAll('.slider-controls');
// const productSliders = document.getElementById('products-slider');
// const wishlist = document.querySelector('.wishlist-button')


// Initialize the page
// console.log('hi')

// const prevButton = document.querySelector('.prev')

// prevButton.addEventListener('click', () => {
//   alert("here you go")
// })

// function click() {
//   alert('hi')
// }


// // Product Sliders Functionality
// console.log('prevButton')
//   sliderControls.forEach((control, index) => {
//       const prevButton = control.querySelector('.prev');
//       const nextButton = control.querySelector('.next');
//       const slider = productSliders[index] || document.querySelectorAll('.products-slider')[index - productSliders.length];
//   console.log('prevButton')
//       if (prevButton && nextButton && slider) {
//         prevButton.addEventListener('click', () => {
//           slider.scrollBy({
//             left: -300,
//             behavior: 'smooth'
//           });
//         });

//         nextButton.addEventListener('click', () => {
//           slider.scrollBy({
//             left: 300,
//             behavior: 'smooth'
//           });
//         });
//       }
//     });



// const boxHover = document.querySelectorAll('.category-card-box');

// boxHover.forEach(box => {
//     box.addEventListener('mouseenter', () => {
//         alert('hi');
//     });
// });



const boxHover = document.querySelectorAll('.category-card-box');

boxHover.forEach((box) => {
  // const svg = document.querySelector('.svg-icon')
  // const svgText = document.querySelector('.card-body')
  box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = '#db4444';
    // svg.style.stroke = 'white'
    // svgText.style.color = 'white'
  });

  box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = 'white';
    
  });
});
