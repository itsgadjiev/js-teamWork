// @ts-nocheck

import { eventListeners } from './modules/eventListeners.js';

import { update, remove, showData, showDataForSelling, turnOffBasket, basketToggle, showBasketItems, addToBasket, filterTheDataForAp, filterTheDataForMain, removeFromBasket } from './modules/functions.js';
const sliderImage = document.querySelector(".image");
const secondImage = document.querySelector(".second-img");
const rightArrowBtn = document.querySelector(".right-angle-icon");
const leftArrowBtn = document.querySelector(".left-angle-icon");
let previusSrc = "./assets/images/ss.jpg";
let nextSrc = "./assets/images/slider-image.jpg";
let isAutoPlay = true;

function autoPlay() {
    if (isAutoPlay) {
      sliderImage.classList.add("hide"); 
      secondImage.classList.add("show"); 
  
      setTimeout(() => {
        sliderImage.classList.remove("hide");
        secondImage.classList.remove("show");
  
        sliderImage.src = nextSrc;
        [nextSrc, previusSrc] = [previusSrc, nextSrc];
      }, 500); 
    }
  }
  

rightArrowBtn.addEventListener("click", () => {
    sliderImage.classList.add("hide"); // Mevcut resmi gizle
    secondImage.classList.add("show"); // İk

    // Geçiş tamamlandıktan sonra sınıfları güncelle
    setTimeout(() => {
        sliderImage.classList.remove("hide");
        secondImage.classList.remove("show");

        // Resimleri yer değiştir
        sliderImage.src = nextSrc;
        [nextSrc, previusSrc] = [previusSrc, nextSrc];
    }, 500); // Geçiş süresi (ms) - CSS'deki geçiş süresiyle aynı olmalı
});

leftArrowBtn.addEventListener("click", () => {
    sliderImage.classList.add("hide"); // Mevcut resmi gizle
    secondImage.classList.add("show"); // İkinci resmi göster

    // Geçiş tamamlandıktan sonra sınıfları güncelle
    setTimeout(() => {
        sliderImage.classList.remove("hide");
        secondImage.classList.remove("show");

        // Resimleri yer değiştir
        sliderImage.src = nextSrc;
        [nextSrc, previusSrc] = [previusSrc, nextSrc];
    }, 2000); // Geçiş süresi (ms) - CSS'deki geçiş süresiyle aynı 
    
    
});

setInterval(autoPlay, 3000); // Her 3 saniyede bir otomatik geçiş yapacak

// Sağ ok düğmesi tıklama olayı
rightArrowBtn.addEventListener("click", () => {
  isAutoPlay = false; // Otomatik geçişi durdur
  autoPlay(); // Geçişi manuel olarak yap
  isAutoPlay = true; // Otomatik geçişi tekrar etkinleştir
});

// Sol ok düğmesi tıklama olayı
leftArrowBtn.addEventListener("click", () => {
  isAutoPlay = false; // Otomatik geçişi durdur
  sliderImage.src = nextSrc; // Mevcut resmi değiştir
  [nextSrc, previusSrc] = [previusSrc, nextSrc]; // Resimleri yer değiştir
  isAutoPlay = true; // Otomatik geçişi tekrar etkinleştir
});


function runApp() {
    update();
    remove();
    eventListeners();
    showData(filterTheDataForAp());
    showDataForSelling(filterTheDataForMain());
    turnOffBasket();
    basketToggle();
    showBasketItems();
    addToBasket();
    removeFromBasket();
}
runApp();

