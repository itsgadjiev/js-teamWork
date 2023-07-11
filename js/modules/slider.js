// @ts-nocheck

import { sliderImage, secondImage, rightArrowBtn, leftArrowBtn } from './constants.js';


let previusSrc = "./assets/images/ss.jpg";
let nextSrc = "./assets/images/slider-image.jpg";
let isAutoPlay = true;

export function autoPlay() {
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

export function sliderEvents() {
    rightArrowBtn.addEventListener("click", () => {
        sliderImage.classList.add("hide");
        secondImage.classList.add("show");
        setTimeout(() => {
            sliderImage.classList.remove("hide");
            secondImage.classList.remove("show");
            sliderImage.src = nextSrc;
            [nextSrc, previusSrc] = [previusSrc, nextSrc];
        }, 300);
    });

    leftArrowBtn.addEventListener("click", () => {
        sliderImage.classList.add("hide");
        secondImage.classList.add("show");
        setTimeout(() => {
            sliderImage.classList.remove("hide");
            secondImage.classList.remove("show");
            sliderImage.src = nextSrc;
            [nextSrc, previusSrc] = [previusSrc, nextSrc];
        }, 300);
    });

    rightArrowBtn.addEventListener("click", () => {
        isAutoPlay = false;
        autoPlay();
        isAutoPlay = true;

    });

    leftArrowBtn.addEventListener("click", () => {
        isAutoPlay = false;
        sliderImage.src = nextSrc;
        [nextSrc, previusSrc] = [previusSrc, nextSrc];
        isAutoPlay = true;
    });

}

export function setIntervalToSlider() {
    setInterval(autoPlay, 5000);
}





