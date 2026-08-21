// 1. スマホハンバーガーメニュー開閉
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-list a, .btn-header-contact');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}

// 2. スクロールアニメーション（AOS初期化）
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 900,
    once: true,
    offset: 120,
    easing: 'ease-out-cubic'
  });
}

// 3. スクロール時のヘッダー影
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (header) {
    if (window.scrollY > 30) {
      header.style.boxShadow = '0 4px 20px rgba(14, 43, 92, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  }
});
