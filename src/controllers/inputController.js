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
    // each button has associated id for item in .id
    (function deleteItem() {
        const closeButtons = document.querySelectorAll('.closeBtn');
        closeButtons.forEach((button) => {
            if (button.id !== 'topRowClose'){
                button.addEventListener('click', function () {
                    removeItem(button.id);
                })

            }
        })

    })();


}



export {initInput, itemListInputs}