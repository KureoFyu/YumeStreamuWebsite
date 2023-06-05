document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghentikan pengiriman form standar

    // Lakukan operasi otentikasi dan validasi di sini

    // Jika berhasil, arahkan ke halaman baru
    window.location.href = "PilihAkun.html";
});
