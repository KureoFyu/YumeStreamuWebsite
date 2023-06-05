document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghentikan pengiriman form standar

    // Lakukan operasi validasi dan pemrosesan pendaftaran di sini

    // Jika berhasil, arahkan ke halaman login
    window.location.href = "login.html";
});
