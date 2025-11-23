document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const ratingBtn = document.getElementById("ratingBtn");
  const closeBtn = document.getElementById("close-btn");

  ratingBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});