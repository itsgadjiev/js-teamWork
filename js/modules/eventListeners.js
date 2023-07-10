// @ts-nocheck

import { removeFromBasket, removeFilters, addToTable, sortByName, sortByNameASC, sortByPrice, sortByPriceASC, showDataForSelling, filterTheDataForMain, filterTheDataForAp, showData } from './functions.js';

import { thirdMain, secondMain, adminPanelWrapper, cardSectionWrapper, addBtn, adminPanelBtn, pNameFilter, darkBackground, basketRedirect, basketWrapper, pNameInput, pCatInput, pPriceInput, pImageinput, pCatFilter, pMinPriceFilter, pMaxPriceFilter, nameSort, nameSortAsc, priceSort, priceSortAsc, pNameFilterMain, pCatFilterMain, pMinPriceFilterMain, pMaxPriceFilterMain, removeFiltersBtn, targettedItems, tableInner } from './constants.js';

export function eventListeners() {
    addBtn.addEventListener('click', addToTable)
    pNameFilter.addEventListener('input', () => {
        showData(filterTheDataForAp())
    });
    pCatFilter.addEventListener('input', () => {
        showData(filterTheDataForAp())
    });
    pMinPriceFilter.addEventListener('input', () => {
        showData(filterTheDataForAp())
    });
    pMaxPriceFilter.addEventListener('input', () => {
        showData(filterTheDataForAp())
    });
    pNameFilterMain.addEventListener('input', () => {
        showDataForSelling(filterTheDataForMain())
    });
    pCatFilterMain.addEventListener('input', () => {
        showDataForSelling(filterTheDataForMain())
    });
    pMinPriceFilterMain.addEventListener('input', () => {
        showDataForSelling(filterTheDataForMain())
    });
    pMaxPriceFilterMain.addEventListener('input', () => {
        showDataForSelling(filterTheDataForMain())
    });
    removeFiltersBtn.forEach(element => {
        element.addEventListener('click', removeFilters);
    });
    adminPanelBtn.addEventListener('click', () => {
        cardSectionWrapper.classList.toggle('d-none');
        adminPanelWrapper.classList.toggle('d-none');
        secondMain.classList.toggle('d-none');
        thirdMain.classList.toggle('d-none');
        footer.classList.toggle('d-none');
    })
    priceSort.addEventListener('click', sortByPrice);
    priceSortAsc.addEventListener('click', sortByPriceASC);
    nameSort.addEventListener('click', sortByName);
    nameSortAsc.addEventListener('click', sortByNameASC);


}