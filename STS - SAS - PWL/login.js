const phoneInput = document.getElementById("phone");
const continueBtn = document.getElementById("continueBtn");

phoneInput.addEventListener("input", function () {
  if (phoneInput.value.trim() !== "") {
    continueBtn.disabled = false;
    continueBtn.classList.add("active");
  } else {
    continueBtn.disabled = true;
    continueBtn.classList.remove("active");
  }
});

