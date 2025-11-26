const btn = document.getElementById("helloBtn");
const msg = document.getElementById("message");

if (btn && msg) {
    btn.addEventListener("click", () => {
        msg.textContent = "Halo! Kamu baru saja menekan tombol 🎉";
    });
}
