// @ts-nocheck

import { baskerCountMain, mainProductsWrapperCard, itemCounter, darkBackground, basketRedirect, basketWrapper, pNameInput, pCatInput, pPriceInput, pImageinput, pNameFilter, pCatFilter, pMinPriceFilter, pMaxPriceFilter, nameSort, nameSortAsc, priceSort, priceSortAsc, pNameFilterMain, pCatFilterMain, pMinPriceFilterMain, pMaxPriceFilterMain, addBtn, removeFiltersBtn, targettedItems, tableInner } from './constants.js';
let itemId;
let items = []

export function removeFromBasket() {

    document.addEventListener('click', function (params) {
        let basketItems = localStorage.getItem('basketItems');
        basketItems = JSON.parse(basketItems);
        const removeBtns = document.querySelectorAll('.remove-from-basket');

        removeBtns.forEach(removeBtn => {
            removeBtn.addEventListener('click', () => {
                const productId = removeBtn.querySelector('input').value;
                basketItems = basketItems.filter(bsItem => Number(bsItem.productId) !== Number(productId));
                localStorage.setItem('basketItems', JSON.stringify(basketItems));
                window.location.reload();
            });
        });
    });
}

export function removeFilters() {

    pNameFilter.value = '';
    pCatFilter.value = '';
    pMinPriceFilter.value = '';
    pMaxPriceFilter.value = '';
    pNameFilterMain.value = '';
    pCatFilterMain.value = '';
    pMinPriceFilterMain.value = '';
    pMaxPriceFilterMain.value = '';

    showData(filterTheDataForAp());
    showDataForSelling(filterTheDataForMain());
}

export function addToTable() {
    let itemIdInLocal = localStorage.getItem('itemId');
    if (itemIdInLocal) {
        itemId = Number(localStorage.getItem('itemId'));
    } else {
        itemId = 1;
    }
    const inputElement = {
        id: Number(itemId),
        name: pNameInput.value,
        category: pCatInput.value,
        price: pPriceInput.value,
        Image: pImageinput.value
    };
    if (pNameInput.value.trim().length && pCatInput.value.trim().length && pPriceInput.value.trim().length && pImageinput.value.trim().length) {
        items.push(inputElement);
        localStorage.setItem('products', JSON.stringify(items));
        itemId += 1;
        localStorage.setItem('itemId', itemId);
        pNameInput.value = '';
        pCatInput.value = '';
        pPriceInput.value = '';
        pImageinput.value = '';
        showData(filterTheDataForAp());
        showDataForSelling(filterTheDataForMain());
    }


}

export function sortByName() {
    const filteredData = items.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    mainProductsWrapperCard.innerHTML = '';
    filteredData.forEach((element) => {
        mainProductsWrapperCard.innerHTML += `<div class="col-3 mt-5 offer-card-col ">
        <div class="offer-card-wrapper ">
            <div class="offer-card-image-wrapper">
                <img class="offer-card-image" src="./assets/images/${element.Image}.jpg"
                    alt="a-man-with-Tshirt">
            </div>
            <div class="offer-card-inner-wrapper">
                <h6 class="offer-card-brand-name pt-4"> ${element.name}</h6>
                <p>${element.category}</p>
            </div>
            <div class="offer-card-price">
                <span>$${element.price}</span><span class="px-2 secondary-span ">With Fee
                    included</span>

                <i class="fa-solid fa-cart-shopping add-to-card" ><input type="hidden" value="${element.id}"></i>
                
            </div>
        </div>
    </div>`;
    });

}

export function sortByNameASC() {
    const filteredData = items.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }
        return 0;
    });
    mainProductsWrapperCard.innerHTML = '';
    filteredData.forEach((element) => {
        mainProductsWrapperCard.innerHTML += `<div class="col-3 mt-5 offer-card-col ">
        <div class="offer-card-wrapper ">
            <div class="offer-card-image-wrapper">
                <img class="offer-card-image" src="./assets/images/${element.Image}.jpg"
                    alt="a-man-with-Tshirt">
            </div>
            <div class="offer-card-inner-wrapper">
                <h6 class="offer-card-brand-name pt-4"> ${element.name}</h6>
                <p>${element.category}</p>
            </div>
            <div class="offer-card-price">
                <span>$${element.price}</span><span class="px-2 secondary-span ">With Fee
                    included</span>

                <i class="fa-solid fa-cart-shopping add-to-card" ><input type="hidden" value="${element.id}"></i>
                
            </div>
        </div>
    </div>`;
    });

}

export function sortByPrice() {

    const filteredData = items.sort((a, b) => {
        return a.price - b.price;
    });
    mainProductsWrapperCard.innerHTML = '';
    filteredData.forEach((element) => {
        mainProductsWrapperCard.innerHTML += `<div class="col-3 mt-5 offer-card-col ">
        <div class="offer-card-wrapper ">
            <div class="offer-card-image-wrapper">
                <img class="offer-card-image" src="./assets/images/${element.Image}.jpg"
                    alt="a-man-with-Tshirt">
            </div>
            <div class="offer-card-inner-wrapper">
                <h6 class="offer-card-brand-name pt-4"> ${element.name}</h6>
                <p>${element.category}</p>
            </div>
            <div class="offer-card-price">
                <span>$${element.price}</span><span class="px-2 secondary-span ">With Fee
                    included</span>

                <i class="fa-solid fa-cart-shopping add-to-card" ><input type="hidden" value="${element.id}"></i>
                
            </div>
        </div>
    </div>`;
    });

}

export function sortByPriceASC() {

    const filteredData = items.sort((a, b) => {
        return b.price - a.price;
    });
    mainProductsWrapperCard.innerHTML = '';
    filteredData.forEach((element) => {
        mainProductsWrapperCard.innerHTML += `<div class="col-3 mt-5 offer-card-col ">
        <div class="offer-card-wrapper ">
            <div class="offer-card-image-wrapper">
                <img class="offer-card-image" src="./assets/images/${element.Image}.jpg"
                    alt="a-man-with-Tshirt">
            </div>
            <div class="offer-card-inner-wrapper">
                <h6 class="offer-card-brand-name pt-4"> ${element.name}</h6>
                <p>${element.category}</p>
            </div>
            <div class="offer-card-price">
                <span>$${element.price}</span><span class="px-2 secondary-span ">With Fee
                    included</span>

                <i class="fa-solid fa-cart-shopping add-to-card" ><input type="hidden" value="${element.id}"></i>
                
            </div>
        </div>
    </div>`;
    });

}

export function addToBasket() {
    const addToBasketIcons = document.querySelectorAll('.add-to-card');
    addToBasketIcons.forEach(atbIcon => {
        atbIcon.addEventListener('click', addToBasketItem);
    });
}

export function addToBasketItem(e) {
    const itemID = Number(e.target.children[0].value);
    const selectedItem = items.find(item => Number(item.id) === itemID);
    let basketItems = localStorage.getItem('basketItems');

    if (basketItems) {
        basketItems = JSON.parse(basketItems);
    } else {

        basketItems = [];

    }

    if (selectedItem) {
        console.log(basketItems);
        let needItem = basketItems.find(bksItem => Number(bksItem.productId) === Number(selectedItem.id));

        if (needItem) {
            needItem.itemCount++;
        } else {
            needItem = {
                productId: selectedItem.id,
                name: selectedItem.name,
                category: selectedItem.category,
                price: selectedItem.price,
                Image: selectedItem.Image,
                itemCount: 1
            };
            basketItems.push(needItem);
        }

        localStorage.setItem('basketItems', JSON.stringify(basketItems));
        window.location.reload();
    }
}

export function showBasketItems() {
    const totalBasketPrice = document.querySelector('.total-basket-price');
    const basketWrapper = document.querySelector('.basket-wrapper');
    let basketItems = localStorage.getItem('basketItems');
    let subtotal = 0;
    basketItems = JSON.parse(basketItems);
    if (basketItems != null) {
        basketItems.forEach(element => {
            subtotal += element.itemCount * element.price;


            basketWrapper.innerHTML += `
            <div class="basket-item-card-wrapper d-flex">
              <div class="basket-item-card-image">
                <img src="./assets/images/${element.Image}.jpg" alt="">
              </div>
              <div class="basket-item-card-inner">
                <i class="fa-solid fa-xmark remove-from-basket">
                  <input type="hidden" value="${element.productId}">
                </i>
                <h5>${element.name}</h5>
                <p>${element.category}</p>
                <p>$${element.price} * ${element.itemCount} = ${element.price * element.itemCount}</p>
                <div class="basket-item-counter">
                  <i class="fa-solid fa-minus"></i>
                  <input type="number" value="${element.itemCount}" readonly>
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div> 
            </div>`;

        });
        totalBasketPrice.innerHTML = `${subtotal}`;
    }




}

export function getArrFromLocalStorage(key) {
    const localStoregaItemArr = localStorage.getItem(`${key}`);
    if (localStoregaItemArr) {
        items = JSON.parse(localStoregaItemArr);
    }
    return items;
}

export function filterTheDataForAp() {
    const nameFilterValue = pNameFilter.value.toLowerCase();
    const catFilterValue = pCatFilter.value.toLowerCase();
    const minPriceFilterValue = pMinPriceFilter.value;
    const maxPriceFilterValue = pMaxPriceFilter.value;

    const localStoregaItemArr = getArrFromLocalStorage('products');

    const filteredData = localStoregaItemArr.filter(element => {
        const name = element.name.toLowerCase();
        const category = element.category.toLowerCase();
        const price = Number(element.price);

        const nameMatch = name.includes(nameFilterValue);
        const categoryMatch = category.includes(catFilterValue);
        const salaryMatch =
            (minPriceFilterValue === '' || price >= Number(minPriceFilterValue)) &&
            (maxPriceFilterValue === '' || price <= Number(maxPriceFilterValue));

        return nameMatch && categoryMatch && salaryMatch;

    });

    return filteredData;
}

export function filterTheDataForMain() {
    const nameFilterValue = pNameFilterMain.value.toLowerCase();
    const catFilterValue = pCatFilterMain.value.toLowerCase();
    const minPriceFilterValue = pMinPriceFilterMain.value;
    const maxPriceFilterValue = pMaxPriceFilterMain.value;


    const localStoregaItemArr = getArrFromLocalStorage('products');

    const filteredData = localStoregaItemArr.filter(element => {
        const name = element.name.toLowerCase();
        const category = element.category.toLowerCase();
        const price = Number(element.price);

        const nameMatch = name.includes(nameFilterValue);
        const categoryMatch = category.includes(catFilterValue);
        const salaryMatch =
            (minPriceFilterValue === '' || price >= Number(minPriceFilterValue)) &&
            (maxPriceFilterValue === '' || price <= Number(maxPriceFilterValue));

        return nameMatch && categoryMatch && salaryMatch;

    });

    return filteredData;
}

export function showDataForSelling(callback) {
    const filteredData = callback;
    itemCounter.innerHTML = filteredData.length + ' ' + 'items found';
    mainProductsWrapperCard.innerHTML = '';
    filteredData.forEach((element) => {
        mainProductsWrapperCard.innerHTML += `<div class="col-3 mt-5 offer-card-col ">
        <div class="offer-card-wrapper ">
            <div class="offer-card-image-wrapper">
                <img class="offer-card-image" src="./assets/images/${element.Image}.jpg"
                    alt="a-man-with-Tshirt">
            </div>
            <div class="offer-card-inner-wrapper">
                <h6 class="offer-card-brand-name pt-4"> ${element.name}</h6>
                <p>${element.category}</p>
            </div>
            <div class="offer-card-price">
                <span>$${element.price}</span><span class="px-2 secondary-span ">With Fee
                    included</span>

                <i class="fa-solid fa-cart-shopping add-to-card" ><input type="hidden" value="${element.id}"></i>
                
            </div>
        </div>
    </div>`;
    });
}

export function showData(callback) {
    const filteredData = callback;
    tableInner.innerHTML = '';
    filteredData.forEach((element) => {
        tableInner.innerHTML += ` <tr>
        <th scope="row">${element.id}</th>
        <td> <input type="text" value="${element.name}" class="nonbordered-input crud-name" readonly></td>
        <td><input type="text" value="${element.category}" class="nonbordered-input crud-cat" readonly>
        </td>
        <td><input type="text" value="${element.price}" class="nonbordered-input crud-price" readonly>
        </td>
        <td>
            <div class="ap-item-photo">
                <img src="./assets/images/${element.Image + ".jpg"}" alt="">
            </div>
            <div class="ap-item-image-string">
                <input  value="${element.Image + ".jpg"}" class="nonbordered-input crud-image"
                    readonly>
            </div>
        </td>
        <td><button class="btn btn-danger delete-btn-ap" value="${element.id}">Delete</button>
        <button class="btn btn-success save-btn-ap" value="${element.id}">Save</button></td>
    </tr>`;
    });
}

export function update() {
    document.addEventListener('click', function (e) {
        const saveBtn = document.querySelectorAll('.btn-success');
        const localStoregaItemArr = getArrFromLocalStorage('products');
        if (e.target.getAttribute('readonly') !== null) {
            e.target.removeAttribute('readonly');
            targettedItems.push(e.target);
            saveBtn.forEach(saveBtn => {
                saveBtn.addEventListener('click', function () {
                    localStoregaItemArr.forEach(item => {
                        if (item.id === Number(saveBtn.value)) {
                            targettedItems.forEach(tgItem => {
                                if (tgItem.classList.contains('crud-name')) {
                                    item.name = tgItem.value;
                                    localStorage.setItem('products', JSON.stringify(localStoregaItemArr));
                                    e.target.setAttribute('readonly', '');
                                    removeFilters();

                                }
                                if (tgItem.classList.contains('crud-cat')) {
                                    item.category = tgItem.value;
                                    localStorage.setItem('products', JSON.stringify(localStoregaItemArr));
                                    e.target.setAttribute('readonly', '');
                                    removeFilters();

                                }
                                if (tgItem.classList.contains('crud-price')) {
                                    item.price = tgItem.value;
                                    localStorage.setItem('products', JSON.stringify(localStoregaItemArr));
                                    e.target.setAttribute('readonly', '');
                                    removeFilters();

                                }
                                if (tgItem.classList.contains('crud-image')) {
                                    item.Image = tgItem.value;
                                    localStorage.setItem('products', JSON.stringify(localStoregaItemArr));
                                    e.target.setAttribute('readonly', '');
                                    removeFilters();

                                }
                            })
                        }
                    });
                });
            });
        }
    });


}

export function remove() {
    document.addEventListener('click', function (params) {
        const localStoregaItemArr = getArrFromLocalStorage('products');
        const removeBtns = document.querySelectorAll('.delete-btn-ap');
        removeBtns.forEach(removeBtn => {
            removeBtn.addEventListener('click', () => {
                const itemId = Number(removeBtn.value);
                const itemIndex = localStoregaItemArr.findIndex(item => item.id === itemId);
                if (itemIndex !== -1) {
                    localStoregaItemArr.splice(itemIndex, 1);
                    localStorage.setItem('products', JSON.stringify(localStoregaItemArr));
                    window.location.reload();
                }
            });
        });
    });

}

export function basketToggle() {
    basketRedirect.addEventListener('click', function (e) {
        e.preventDefault();
        basketWrapper.classList.toggle('d-none');
        darkBackground.classList.toggle('d-none');


    })
}

export function turnOffBasket() {
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('dark-background')) {

            basketWrapper.classList.add('d-none');
            darkBackground.classList.add('d-none');
        }
    })
}
export function setBasketCount() {

    let basketItems = localStorage.getItem('basketItems');
    basketItems = JSON.parse(basketItems);
    baskerCountMain.innerHTML = basketItems.length;
    console.log(basketItems.length);
}

