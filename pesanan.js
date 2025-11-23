const popup = document.getElementById('popup');
const cartIcon = document.querySelector('.cart-bar');
const closeBtn = document.getElementById('close-btn');

cartIcon.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popup) popup.style.display = 'none';
});

const popupSelesai = document.getElementById("popup-selesai");
const closeSelesai = document.querySelector(".close-selesai");
const payBtn = document.querySelector(".pay-btn");

payBtn.addEventListener("click", () => {

  document.getElementById("popup").style.display = "none";

  popupSelesai.style.display = "flex";
});

closeSelesai.addEventListener("click", () => {
  popupSelesai.style.display = "none";
});

closeSelesai.addEventListener("click", () => {
  popupSelesai.style.display = "none";
  window.location.href = "proses.html"; 
});

window.addEventListener("click", (e) => {
  if (e.target === popupSelesai) {
    popupSelesai.style.display = "none";
    window.location.href = "proses.html"; 
  }
});