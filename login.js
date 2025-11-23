const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const continueBtn = document.getElementById("continueBtn");

const updateButtonState = () => {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    
    // Validasi sederhana: Email tidak boleh kosong DAN Password minimal 6 karakter
    // Anda bisa menambahkan validasi regex untuk format email yang lebih ketat jika diperlukan
    const isValid = emailValue !== "" && passwordValue.length >= 6; 

    continueBtn.disabled = !isValid;
    if (isValid) {
        continueBtn.classList.add("active");
        continueBtn.textContent = "Login"; // Pastikan teksnya "Login"
    } else {
        continueBtn.classList.remove("active");
        continueBtn.textContent = "Login";
    }
};

// Pasang listener pada kedua input
emailInput.addEventListener("input", updateButtonState);
passwordInput.addEventListener("input", updateButtonState);

// Event listener untuk submit form
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    // Lakukan validasi akhir
    if (emailInput.value.trim() === "" || passwordInput.value.trim().length < 6) {
        alert("Mohon masukkan email yang valid dan password minimal 6 karakter.");
        return; 
    }

    // Ganti teks tombol dan nonaktifkan selama proses
    continueBtn.textContent = "Processing..."; 
    continueBtn.disabled = true;

    // Di sini seharusnya ada AJAX call untuk otentikasi
    // ...
    
    // Setelah otentikasi berhasil, lakukan pengalihan
    // window.location.href = "dashboard.html"; 

    // Untuk demo, kita kembalikan tombol ke keadaan semula setelah 1 detik
    setTimeout(() => {
        alert("Login Berhasil (Simulasi)");
        continueBtn.textContent = "Login";
        updateButtonState(); // Setel ulang status
    }, 1000);
});

// Panggil sekali saat halaman dimuat
updateButtonState();