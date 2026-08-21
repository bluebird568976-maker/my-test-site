// 全画面 背景人物スライダーの常時切り替え
const bgSlides = document.querySelectorAll('.bg-slide-item');
if (bgSlides.length > 0) {
  let currentSlide = 0;
  setInterval(() => {
    bgSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % bgSlides.length;
    bgSlides[currentSlide].classList.add('active');
  }, 5000);
}
