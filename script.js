function confirmJoin() {
    document.getElementById("message").innerText =
        "Hẹn gặp bạn trong buổi chụp kỷ yếu ( •̀ ω •́ )✧";
}

const shootDate = new Date("2026-02-12T09:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = shootDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText =
            "Hôm nay là ngày chụp kỷ yếu! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("countdown").innerText =
        `${days} ngày ${hours} giờ ${minutes} phút`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const icons = ["🎉", "✨"];
const container = document.querySelector(".falling-container");

function createFallingIcon() {
    const span = document.createElement("span");
    span.innerText = icons[Math.floor(Math.random() * icons.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = (3 + Math.random() * 3) + "s";
    container.appendChild(span);

    setTimeout(() => span.remove(), 6000);
}

setInterval(createFallingIcon, 300);
