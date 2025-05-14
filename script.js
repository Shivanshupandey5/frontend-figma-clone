// Carousel Script
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const dotsContainer = document.querySelector(".carousel-dots");
  const testimonials = document.querySelectorAll(".testimonial");

  if (!carousel || !dotsContainer || testimonials.length === 0) return;

  const testimonialWidth = testimonials[0].offsetWidth;

  // Create dots dynamically
  testimonials.forEach((_, idx) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (idx === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      carousel.scrollTo({
        left: idx * testimonialWidth,
        behavior: "smooth",
      });
      updateDots(idx);
    });

    dotsContainer.appendChild(dot);
  });

  // Update dot status
  function updateDots(activeIdx) {
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, idx) =>
      dot.classList.toggle("active", idx === activeIdx)
    );
  }

  // Auto update active dot on scroll
  carousel.addEventListener("scroll", () => {
    const scrollLeft = carousel.scrollLeft;
    const index = Math.round(scrollLeft / testimonialWidth);
    updateDots(index);
  });
});