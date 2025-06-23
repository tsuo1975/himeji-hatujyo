// スクロール時に各セクションをフェードイン表示
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  for (const el of reveals) {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      el.classList.add('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// ヒーローのテキストをふわっと表示
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.hero-overlay').classList.add('show');
});
