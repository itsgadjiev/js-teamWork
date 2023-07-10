// @ts-nocheck

import { eventListeners } from './modules/eventListeners.js';

import { update, remove, showData, showDataForSelling, turnOffBasket, basketToggle, showBasketItems, addToBasket, filterTheDataForAp, filterTheDataForMain, removeFromBasket } from './modules/functions.js';


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

