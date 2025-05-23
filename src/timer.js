const eventDate = new Date("2025-05-27T10:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.querySelector(".footer__countdown").textContent = "Exam was passed";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.querySelector(".footer__countdown").textContent =
    `${days} дн ${hours} ч ${minutes} мин ${seconds} сек`;
}

const timer = setInterval(updateCountdown, 1000);
