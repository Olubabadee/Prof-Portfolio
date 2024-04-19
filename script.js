const slider = document.querySelector(".slider-container");
const slides = slider.querySelectorAll(".slide");
const prevBtn = slider.querySelector(".prev-btn");
const nextBtn = slider.querySelector(".next-btn");

let currentSlide = 0;

// Function to show the current slide
function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active", "hidden")); // Remove both "active" and "hidden" classes
  slides[n].classList.add("active");
  currentSlide = n;
}

// Next Button functionality
nextBtn.addEventListener("click", () => {
  // Increase currentSlide by 1
  currentSlide++;

  // Check if it's the last slide, loop back to the first one
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Call showSlide function to display the new slide
  showSlide(currentSlide);
});

// Previous Button functionality (similar logic, adjust for decrementing)
// ... (implement similar logic for the previous button)

// Start with the first slide active
showSlide(currentSlide);
