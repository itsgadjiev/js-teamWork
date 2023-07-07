// @ts-nocheck


// const addBtn = document.querySelector('.add-btn');
// const tableInner = document.querySelector('.table-inner');
// const nameFilterInput = document.querySelector('.name-filter');
// const surnameFilterInput = document.querySelector('.surname-filter');
// const salaryMinFilterInput = document.querySelector('.salary-min-filter');
// const salaryMaxFilterInput = document.querySelector('.salary-max-filter');
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
const addBtn = document.querySelector('.add-btn');


const items = [];
let itemId = 1;

function addToTable() {
    localStorage.setItem('itemId', itemId);
    const inputElement = {
        id: Number(localStorage.getItem('itemId')),
        name: pNameInput.value,
        category: pCatInput.value,
        price: pPriceInput.value,
        Image: pImageinput.value
    };
    items.push(inputElement);
    localStorage.setItem('myArray', JSON.stringify(items));
    localStorage.setItem('itemId', itemId);
    itemId += 1;
    pNameInput.value = '';
    pCatInput.value = '';
    pPriceInput.value = '';
    pImageinput.value = '';

    // filterData();
}

function eventListeners() {
    addBtn.addEventListener('click', addToTable)
}

eventListeners();



// function filterData() {
//     const nameFilterValue = nameFilterInput.value.toLowerCase();
//     const surnameFilterValue = surnameFilterInput.value.toLowerCase();
//     const minSalaryFilterValue = salaryMinFilterInput.value;
//     const maxSalaryFilterValue = salaryMaxFilterInput.value;

//     const filteredData = datas.filter(element => {
//         const name = element.name.toLowerCase();
//         const surname = element.surname.toLowerCase();
//         const salary = Number(element.salary);

//         const nameMatch = name.includes(nameFilterValue);
//         const surnameMatch = surname.includes(surnameFilterValue);
//         const salaryMatch =
//             (minSalaryFilterValue === '' || salary >= Number(minSalaryFilterValue)) &&
//             (maxSalaryFilterValue === '' || salary <= Number(maxSalaryFilterValue));

//         return nameMatch && surnameMatch && salaryMatch;
//     });

//     tableInner.innerHTML = '';

//     filteredData.forEach((element, idx) => {
//         tableInner.innerHTML += `<tr>
//       <th scope="row">${idx + 1}</th>
//       <td>${element.name}</td>
//       <td>${element.surname}</td>
//       <td>${element.salary}</td>
//     </tr>`;
//     });
// }

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
//     addBtn.addEventListener('click', addToTable)
//     nameFilterInput.addEventListener('input', filterData);
//     surnameFilterInput.addEventListener('input', filterData);
//     salaryMinFilterInput.addEventListener('input', filterData);
//     salaryMaxFilterInput.addEventListener('input', filterData);
//     nameSort.addEventListener('click', sortByName);
//     surnameSort.addEventListener('click', sortBySurname);
//     salarySort.addEventListener('click', sortBySalary);
//     removeFiltersBtn.addEventListener('click', removeFilters)

// }

// eventListeners();
