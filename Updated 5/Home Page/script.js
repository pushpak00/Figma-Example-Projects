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



// const boxHover = document.querySelectorAll('.category-card-box');
// const svgText = document.querySelector('.card-body')

// boxHover.forEach((box) => {
//   svgText.forEach((svgtxt) =>{

//   box.addEventListener('mouseenter', () => {
//     // const svg = document.querySelector('.svg-icon')
    
//     box.style.backgroundColor = '#db4444';
//     // svg.style.color = 'white'
    
//   });

//   box.addEventListener('mouseleave', () => {
//     box.style.backgroundColor = 'white';
    

//   });
// })
// });


function runFun() {
  alert('hi')
}


const likeBtn = document.querySelector('#like-btn')
const likeIcon = document.querySelector('#like-icon')
 

// likeBtn.addEventListener('click', () => {
//           alert('hi')

//   if (likeIcon.classList.contains('bi-suit-heart')) {
//     likeIcon.classList.remove('bi-suit-heart');
//     likeIcon.classList.add('bi-suit-heart-fill');
//     likeIcon.style.color = 'red'
// } else {
//   likeIcon.classList.remove('bi-suit-heart-fill');
//   likeIcon.classList.add('bi-suit-heart');
//   likeIcon.style.color = 'black'
// }
// })


// likeBtn.forEach(button => {
//   button.addEventListener('click', () => {
//     const icon = button.querySelector('i'); // Get the icon inside the button

//     // Toggle between the empty heart and filled heart icon
//     if (icon.classList.contains('bi-heart')) {
//       icon.classList.replace('bi-heart', 'bi-heart-fill'); // Change to filled heart
//     } else {
//       icon.classList.replace('bi-heart-fill', 'bi-heart'); // Change to empty heart
//     }
//   });
// });




// --------------------



// const targetDate = new Date('2025-03-30T00:00:00'); 

//     function updateCountdown() {
//         const now = new Date();
//         const timeDifference = targetDate - now;

//         if (timeDifference <= 0) {
//             clearInterval(countdownInterval);
//             document.getElementById("days").innerText = "00";
//             document.getElementById("hours").innerText = "00";
//             document.getElementById("minutes").innerText = "00";
//             document.getElementById("seconds").innerText = "00";
//             alert("Countdown is over!");
//         } else {
//             const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//             // Update the HTML elements with the remaining time
//             document.getElementById("days").innerText = String(days).padStart(2, '0');
//             document.getElementById("hours").innerText = String(hours).padStart(2, '0');
//             document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
//             document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
//         }
//     }

//     // Call the updateCountdown function every second (1000 ms)
//     const countdownInterval = setInterval(updateCountdown, 1000);

//     // Initial call to display the countdown immediately
//     updateCountdown();



