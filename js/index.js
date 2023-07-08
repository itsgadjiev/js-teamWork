// @ts-nocheck


const tableInner = document.querySelector('.table-inner');

// const nameSort = document.querySelector('.name-order');
// const surnameSort = document.querySelector('.surname-order');
// const salarySort = document.querySelector('.salary-order');
// const removeFiltersBtn = document.querySelector('.btn-danger');
// let nameCounter = 0;
// let surnameCounter = 0;
// let ageCounter = 0;


//////////////////////////////////////////////////////////////
const adminPanelBtn = document.querySelector('.admin-panel');
const cardSectionWrapper = document.querySelector('.fully-wrappered-cards-section');
const adminPanelWrapper = document.querySelector('.admin-panel-section');

adminPanelBtn.addEventListener('click', () => {
    console.log();
    cardSectionWrapper.classList.add('d-none');
    adminPanelWrapper.classList.remove('d-none');

})
/////////////////////////////////////////////////

const pNameInput = document.querySelector('.pName-input');
const pCatInput = document.querySelector('.pCat-input');
const pPriceInput = document.querySelector('.pPrice-input');
const pImageinput = document.querySelector('.pImage-input');

const pNameFilter = document.querySelector('.pName-filter');
const pCatFilter = document.querySelector('.pCat-filter');
const pMinPriceFilter = document.querySelector('.p-min-price-filter');
const pMaxPriceFilter = document.querySelector('.p-max-price-filter');

const addBtn = document.querySelector('.add-btn');


let items = [];
let itemId;

function addToTable() {
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
    items.push(inputElement);
    localStorage.setItem('products', JSON.stringify(items));
    itemId += 1;
    localStorage.setItem('itemId', itemId);
    pNameInput.value = '';
    pCatInput.value = '';
    pPriceInput.value = '';
    pImageinput.value = '';
    filterData();

}

function eventListeners() {
    addBtn.addEventListener('click', addToTable)
    pNameFilter.addEventListener('input', filterData);
    pCatFilter.addEventListener('input', filterData);
    pMinPriceFilter.addEventListener('input', filterData);
    pMaxPriceFilter.addEventListener('input', filterData);
}

filterData();
eventListeners();

function getArrFromLocalStorage(key) {
    const localStoregaItemArr = localStorage.getItem(`${key}`);
    if (localStoregaItemArr) {
        items = JSON.parse(localStoregaItemArr);
    }
    return items;
}


function filterData() {
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

    tableInner.innerHTML = '';

    filteredData.forEach((element) => {
        tableInner.innerHTML += ` <tr>
        <th scope="row">${element.id}</th>
        <td> <input type="text" value="${element.name}" class="nonbordered-input" readonly></td>
        <td><input type="text" value="${element.category}" class="nonbordered-input" readonly>
        </td>
        <td><input type="text" value="${element.price}" class="nonbordered-input" readonly>
        </td>
        <td>
            <div class="ap-item-photo">
                <img src="./assets/images/${element.image}" alt="">
            </div>
            <div class="ap-item-image-string">
                <input type="hidden" value="${element.id}" class="nonbordered-input"
                    readonly>
            </div>
        </td>
        <td><button class="btn btn-danger" value="${element.id}">Delete</button></td>
    </tr>`;
    });
}

// //sort kodlari oz beynimin mehsulu deyil :D
// //counteri ozum elemishem bilirem bele yazmaq duzgun deyil amma ki togle effecti yaratmaq ucun kreativlik :D
// function sortByName() {
//     if (nameCounter % 2 === 0) {
//         const filteredData = datas.sort((a, b) => {
//             const nameA = a.name.toUpperCase();
//             const nameB = b.name.toUpperCase();
//             if (nameA < nameB) {
//                 return -1;
//             }
//             if (nameA > nameB) {
//                 return 1;
//             }
//             return 0;
//         });
//         tableInner.innerHTML = '';

//         filteredData.forEach((element, idx) => {
//             tableInner.innerHTML += `<tr>
//               <th scope="row">${idx + 1}</th>
//               <td>${element.name}</td>
//               <td>${element.surname}</td>
//               <td>${element.salary}</td>
//             </tr>`;
//         });
//         nameCounter++;
//     } else {
//         const filteredData = datas.sort((a, b) => {
//             const nameA = a.name.toUpperCase();
//             const nameB = b.name.toUpperCase();
//             if (nameA < nameB) {
//                 return 1;
//             }
//             if (nameA > nameB) {
//                 return -1;
//             }
//             return 0;
//         });
//         tableInner.innerHTML = '';
//         filteredData.forEach((element, idx) => {
//             tableInner.innerHTML += `<tr>
//               <th scope="row">${idx + 1}</th>
//               <td>${element.name}</td>
//               <td>${element.surname}</td>
//               <td>${element.salary}</td>
//             </tr>`;
//         });
//         nameCounter++;

//     }


// }

// function sortBySurname() {
//     if (surnameCounter % 2 === 0) {
//         const filteredData = datas.sort((a, b) => {
//             const nameA = a.surname.toUpperCase();
//             const nameB = b.surname.toUpperCase();
//             if (nameA < nameB) {
//                 return -1;
//             }
//             if (nameA > nameB) {
//                 return 1;
//             }
//             return 0;
//         });
//         tableInner.innerHTML = '';

//         filteredData.forEach((element, idx) => {
//             tableInner.innerHTML += `<tr>
//               <th scope="row">${idx + 1}</th>
//               <td>${element.name}</td>
//               <td>${element.surname}</td>
//               <td>${element.salary}</td>
//             </tr>`;
//         });
//         surnameCounter++;
//     } else {
//         const filteredData = datas.sort((a, b) => {
//             const nameA = a.surname.toUpperCase();
//             const nameB = b.surname.toUpperCase();
//             if (nameA < nameB) {
//                 return 1;
//             }
//             if (nameA > nameB) {
//                 return -1;
//             }
//             return 0;
//         });
//         tableInner.innerHTML = '';
//         filteredData.forEach((element, idx) => {
//             tableInner.innerHTML += `<tr>
//               <th scope="row">${idx + 1}</th>
//               <td>${element.name}</td>
//               <td>${element.surname}</td>
//               <td>${element.salary}</td>
//             </tr>`;
//         });
//         surnameCounter++;

//     }


// }

// function sortBySalary() {
//     if (ageCounter % 2 == 0) {
//         const filteredData = datas.sort((a, b) => {
//             return a.salary - b.salary;
//         });
//         tableInner.innerHTML = '';
//         filteredData.forEach((element, idx) => {
//             tableInner.innerHTML += `<tr>
//               <th scope="row">${idx + 1}</th>
//               <td>${element.name}</td>
//               <td>${element.surname}</td>
//               <td>${element.salary}</td>
//             </tr>`;
//         });
//         ageCounter++;
//     }
//     else {
//         const filteredData = datas.sort((a, b) => {
//             return b.salary - a.salary;
//         });
//         tableInner.innerHTML = '';
//         filteredData.forEach((element, idx) => {
//             tableInner.innerHTML += `<tr>
//               <th scope="row">${idx + 1}</th>
//               <td>${element.name}</td>
//               <td>${element.surname}</td>
//               <td>${element.salary}</td>
//             </tr>`;
//         });
//         ageCounter++;

//     }
// }
// //////////////////////////////////////////////////////


// function removeFilters() {

//     tableInner.innerHTML = '';
//     pNameInput.value = '';
//     pCatInput.value = '';
//     pPriceInput.value = '';
//     pImageinput.value = '';
//     console.log("salam");
//     datas.forEach((element, idx) => {
//         tableInner.innerHTML += `<tr>
//           <th scope="row">${idx + 1}</th>
//           <td>${element.name}</td>
//           <td>${element.surname}</td>
//           <td>${element.salary}</td>
//         </tr>`;
//     });
// }

// function eventListeners() {

//     nameSort.addEventListener('click', sortByName);
//     surnameSort.addEventListener('click', sortBySurname);
//     salarySort.addEventListener('click', sortBySalary);
//     removeFiltersBtn.addEventListener('click', removeFilters)

// }

// eventListeners();
