document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Спасибо! Я скоро свяжусь с тобой.");
      form.reset();
    });
  }
});
