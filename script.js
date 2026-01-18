function confirmJoin() {
    document.getElementById("message").innerText =
        "Hẹn gặp nhau trong buổi chụp nhoe (≧◡≦) ♡";
}

/* ===== ĐẾM NGƯỢC ===== */
/* 👉 NHỚ SỬA NGÀY */
const shootDate = new Date("YYYY-MM-DDT07:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = shootDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText =
            "Là hôm nay đó má";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("countdown").innerText =
        `${days} ngày ${hours} giờ ${minutes} phút ♡`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ===== HIỆU ỨNG RƠI CUTE ===== */
const icons = ["✨", "🌸", "🎀", "💫"];
const container = document.querySelector(".falling-container");

function createFallingIcon() {
    const span = document.createElement("span");
    span.innerText = icons[Math.floor(Math.random() * icons.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = (4 + Math.random() * 3) + "s";
    container.appendChild(span);

    setTimeout(() => span.remove(), 7000);
}

setInterval(createFallingIcon, 350);
