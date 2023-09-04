import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");
// 滾動條
const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    speed: 20000,
    allowTouchMove: false,
    loop: true,
    autoplay: {
      delay: 1
    }
  });