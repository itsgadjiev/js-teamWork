// @ts-nocheck

import { eventListeners } from './modules/eventListeners.js';

import { update, remove, showData, showDataForSelling, turnOffBasket, basketToggle, showBasketItems, addToBasket, filterTheDataForAp, filterTheDataForMain, removeFromBasket, setBasketCount } from './modules/functions.js';

import { autoPlay, sliderEvents, setIntervalToSlider } from './modules/slider.js';

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
  setBasketCount();
  autoPlay();
  sliderEvents();
  setIntervalToSlider();
}
runApp();

