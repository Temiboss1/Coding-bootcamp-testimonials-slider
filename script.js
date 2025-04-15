const slides = document.querySelectorAll(".hero-content");
const nextBtn = document.querySelectorAll("#next");
const prevBtn = document.querySelectorAll("#prev");

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "flex" : "none";
  });
}

nextBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });
});

prevBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });
});

showSlide(current);
