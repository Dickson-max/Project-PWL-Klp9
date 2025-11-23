const registerForm = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const termsCheckbox = document.getElementById("termsCheckbox");
const registerBtn = document.getElementById("registerBtn");

// Fungsi untuk mengecek apakah semua input valid
const isValidForm = () => {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    
    // Validasi sederhana:
    // 1. Nama tidak boleh kosong
    // 2. Email tidak boleh kosong (Validasi format email bisa ditambahkan di sini)
    // 3. Password minimal 6 karakter
    // 4. Checkbox harus dicentang
    const isNameValid = nameValue !== "";
    const isEmailValid = emailValue !== "";
    const isPasswordValid = passwordValue.length >= 6; 
    const isTermsChecked = termsCheckbox.checked;

    return isNameValid && isEmailValid && isPasswordValid && isTermsChecked;
};

// Fungsi untuk memperbarui status tombol
const updateButtonState = () => {
    const isValid = isValidForm();

    registerBtn.disabled = !isValid;
    if (isValid) {
        registerBtn.classList.add("active");
        registerBtn.textContent = "Daftar";
    } else {
        registerBtn.classList.remove("active");
        registerBtn.textContent = "Daftar";
    }
};

// Pasang listener pada semua input dan checkbox
nameInput.addEventListener("input", updateButtonState);
emailInput.addEventListener("input", updateButtonState);
passwordInput.addEventListener("input", updateButtonState);
termsCheckbox.addEventListener("change", updateButtonState); // Gunakan 'change' untuk checkbox

// Event listener untuk submit form
registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    if (!isValidForm()) {
        alert("Mohon lengkapi semua data dengan benar dan setujui syarat & ketentuan.");
        return; 
    }

    // Ubah status tombol
    registerBtn.textContent = "Processing..."; 
    registerBtn.disabled = true;

    // Di sini akan ada kode untuk mengirim data ke server (AJAX)
    // ...
    
    // Simulasi sukses registrasi dan pengalihan
    setTimeout(() => {
        alert(`Akun untuk ${nameInput.value} berhasil dibuat!`);
        // Lakukan pengalihan ke halaman berikutnya
        // window.location.href = "dashboard.html"; 
        
        // Kembalikan tombol ke keadaan semula jika pengalihan dibatalkan
        updateButtonState(); 
    }, 1500);
});

// Panggil sekali saat halaman dimuat
updateButtonState();