import {
    addItem,
    displayItem,
    removeItem
} from './stateController.js';

import { renderAddItemPage } from './displayController.js';
import { getCurrentTime } from './utils.js'



const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');

function initInput(){
    addItemInputs();
}


function addItemInputs(){

    (function addItemModalSetup() {
        openBtn.addEventListener('click', () => {
            modal.showModal();
        });
        modal.addEventListener('click', (e) => {
            const dialogDimensions = modal.getBoundingClientRect();
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                modal.close();
            }
        })
        closeBtn.addEventListener('click', () => {
            modal.close();
        });
    })();

    (function addItemPagePopup() {
        const addBtn = document.querySelector('.addBtn')
        addBtn.addEventListener('click', function () {
            renderAddItemPage()
            addItemSubmitSetup()
        })
    })();

    function addItemSubmitSetup() {
        const addItemForm = document.querySelector('.addItemForm')
        addItemForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const itemName = addItemForm.name.value;
            const itemCost = Number(addItemForm.cost.value);
            const itemCategory = addItemForm.category.value;
            const itemDescription = addItemForm.description.value;

            let dateValue = '';
            if (addItemForm.date.value == '') {
                dateValue = getCurrentTime();
            } else {
                dateValue = addItemForm.date.value;
            }
            const itemDate = dateValue;


            const itemPriority = addItemForm.priority.value;
            addItem(itemName, itemCost, itemCategory, itemDescription, itemDate, itemPriority,);
            displayItem();
            addItemForm.reset();
            modal.close();
            // want to call the display controller here to REFRESH DISPLAY
        })


    };
}


function itemListInputs(){
    // each button has associated id for item in .dataset.itemID
    (function deleteItemBtn() {
        const closeButtons = document.querySelectorAll('.closeBtn');
        closeButtons.forEach((button) => {
            if (button.dataset.itemID !== 'topRowClose'){
                button.addEventListener('click', function () {
                    removeItem(button.dataset.itemID);
                })

            }
        })

    })();

    // each cell has associated id for item in .dataset.itemID 
    // and associated infoType in .dataset.infoType
    (function editInformation(){
        let page = document.querySelector('.page')
        const dataCells = document.querySelectorAll('.itemListItem')
        dataCells.forEach((dataCell) => {
            dataCell.addEventListener('click', function () {
                // console.log(`${dataCell.dataset.infoType} ${dataCell.dataset.itemID} `)
                // create modal that pops up covering where dataCell is (darken everything else)
                    // clicking outside of modal cancels input
                    // clicking enter updates the value based on what is inside input
                const valueDialog = document.createElement('dialog');
                valueDialog.textContent = 'SS'
                page.appendChild(valueDialog);
                valueDialog.showModal();
                valueDialog.addEventListener('click', (e) => {
                    // if click outside of modal
                    const dialogDimensions = valueDialog.getBoundingClientRect();
                    if (
                        e.clientX < dialogDimensions.left ||
                        e.clientX > dialogDimensions.right ||
                        e.clientY < dialogDimensions.top ||
                        e.clientY > dialogDimensions.bottom
                    ) {
                        valueDialog.close();
                    }
                    
                })

                // sets position of modal according to dataCell
                const dataCellPosition = dataCell.getBoundingClientRect()  
                valueDialog.style.position = 'fixed';
                valueDialog.style.top = `${dataCellPosition.top}px`;
                valueDialog.style.left = `${dataCellPosition.left}px`;
                valueDialog.style.width = `${dataCellPosition.width-1}px`;
                valueDialog.style.height = `${dataCellPosition.height-1}px`;

                // create form
                valueDialog.innerHTML = `<form class="itemListForm" method="get">
                    <div class="inputDiv">
                        <input class = "itemListInput" type="text" name="name" required />
                    </div>
                </form>`;
                const itemListInput = document.querySelector('.itemListInput');
                itemListInput.focus();
            })

        })
    })();


}



export {initInput, itemListInputs}