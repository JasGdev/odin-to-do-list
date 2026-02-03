import {
    addCategoryToHide,
    addItem,
    categoryToHideAll,
    displayItem,
    getCategoryList,
    getItemById,
    removeCategoryToHide,
    removeItem,
    resetCategoryToHide,
    setCategoryToColor,
    setSortingMode
} from './stateController.js';

import { renderAddItemPage, renderItemListPage } from './displayController.js';
import { getCurrentTime, getTextColor } from './utils.js'
import { renderPage} from './displayController.js';



const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');

function initInput() {
    addItemInputs();
}


function addItemInputs() {

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
                modal.remove();
            }
        })
        closeBtn.addEventListener('click', () => {
            modal.close();
            modal.remove();
            
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
            const itemCount = Number(addItemForm.count.value);

            let dateValue = '';
            if (addItemForm.date.value == '') {
                dateValue = getCurrentTime();
            } else {
                dateValue = addItemForm.date.value;
            }
            const itemDate = dateValue;


            const itemPriority = addItemForm.priority.value;
            addItem(itemName, itemCost, itemCategory, itemDescription, itemDate, itemPriority, itemCount);
            displayItem();
            addItemForm.reset();
            modal.close();
            // want to call the display controller here to REFRESH DISPLAY
        })


    };
}


function itemListInputs() {
    // each button has associated id for item in .dataset.itemID
    (function deleteItemBtn() {
        const closeButtons = document.querySelectorAll('.closeBtn');
        closeButtons.forEach((button) => {
            if (button.dataset.itemID !== 'topRowClose') {
                button.addEventListener('click', function () {
                    removeItem(button.dataset.itemID);
                })

            }
        })

    })();

    // each cell has associated id for item in .dataset.itemID 
    // and associated infoType in .dataset.infoType
    (function editInformation() {
        let page = document.querySelector('.page')
        const dataCells = document.querySelectorAll('.editable')

        // Allow click and edit like in excel
        dataCells.forEach((dataCell) => {
            dataCell.addEventListener('click', function () {
                // create modal that pops up covering where dataCell is (darken everything else)
                // clicking outside of modal cancels input
                // clicking enter updates the value based on what is inside input
                const valueDialog = document.createElement('dialog');
                document.body.appendChild(valueDialog);
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
                        valueDialog.remove();
                    }

                })

                valueDialog.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter'){
                        e.preventDefault();
                        // call stateController to change the value into the current form value
                            // changeItemPropertyById(Id, infoType, newValue)
                        const itemId = dataCell.dataset.itemID; 
                        const propertyToChange = dataCell.dataset.infoType;
                        const newValue = document.querySelector('.itemListForm').formValue.value; 
                        
                        if (Number.isInteger(Number(newValue))){
                            getItemById(itemId)[propertyToChange] = Number(newValue);
                        } else {
                            getItemById(itemId)[propertyToChange] = newValue;
                        }
                        
                        valueDialog.close();
                        valueDialog.remove();
                        renderPage();
                        displayItem();

                        
                    }
                })


                    const dataCellPosition = dataCell.getBoundingClientRect()
                    valueDialog.style.position = 'fixed';
                    valueDialog.style.top = `${dataCellPosition.top}px`;
                    valueDialog.style.left = `${dataCellPosition.left}px`;
                    valueDialog.style.width = `${dataCellPosition.width}px`;
                    valueDialog.style.height = `${dataCellPosition.height}px`;

                


                let dataCellType = '';
                // create form
                if (dataCell.dataset.infoType == 'name' ||
                    dataCell.dataset.infoType == 'category' ||
                    dataCell.dataset.infoType == 'description') {
                    dataCellType = 'text';
                } else if (dataCell.dataset.infoType == 'date') {
                    dataCellType = 'date';
                } else if (dataCell.dataset.infoType == 'cost') {
                    dataCellType = 'number';
                } else if (dataCell.dataset.infoType == 'count') {
                    dataCellType = 'number';
                } else if (dataCell.dataset.infoType == 'priority') {
                    dataCellType = 'number';
                }

                const currItem = getItemById(dataCell.dataset.itemID)
                const currInfoType = dataCell.dataset.infoType;


                // count will have add and reduce button in addition to text selector
                if (dataCellType === 'text' || dataCellType === 'date' || dataCellType === 'number' || dataCellType === 'radio') {
                    valueDialog.innerHTML = `<form class="itemListForm" method="get">
                    <div class="inputDiv">
                        <input class = "itemListInput ${dataCellType} notCount" type='${dataCellType}' 
                        value = "${currItem[currInfoType]}" name="formValue" required />
                    </div>
                    </form>`;
                    const itemListInput = document.querySelector('.itemListInput');
                    itemListInput.focus();
                    itemListInput.select();
                    if (dataCellType == 'date') {
                        itemListInput.showPicker();
                    }
                } 


            })

        })

        // implement increase and decrease button on count
        // increase and decrease button have .dataset.type = 'increase' or 'decrease'
        // btn also has .dataset.itemID 
        const countBtns = document.querySelectorAll('.countBtn')
        countBtns.forEach((btn) => {
            btn.addEventListener('click', function() {
                const btnItemID = btn.dataset.itemID
                const btnType = btn.dataset.type
                if (btnType == 'increase'){
                    getItemById(btnItemID)['count'] += 1;
                    

                } else if (getItemById(btnItemID)['count'] > 0) {
                    getItemById(btnItemID)['count'] -= 1;
                }
                renderPage();
                displayItem();

            })
        })





    })();


}

function categoryInputs() {
    // category show/hide button
    const categoryShowHideCheckBoxes = document.querySelectorAll('.categoryShow')
    categoryShowHideCheckBoxes.forEach((checkBox) => {
        checkBox.addEventListener('click', function(){
            if (checkBox.checked == false){
                addCategoryToHide(checkBox.value);
            } else if (checkBox.checked == true){
                removeCategoryToHide(checkBox.value);
            }
            console.log(getCategoryList())
            
            renderPage();
            
        })
    })

    // show all / hide all button
    const categoryShowAllBtn = document.querySelector('.showAllBtn')
    const categoryHideAllBtn = document.querySelector('.hideAllBtn')
    categoryShowAllBtn.addEventListener('click', function(){
        resetCategoryToHide();
        renderPage();
    })

    categoryHideAllBtn.addEventListener('click', function(){
        categoryToHideAll();
        
        renderPage();
    })

    // color selectors
    const categoryColorSelectors = document.querySelectorAll('.categoryColor')
    categoryColorSelectors.forEach((colorSelector) => {

        const category = colorSelector.id;
        const divs = document.querySelectorAll(`[data-item-category=${category}]`);
        


        colorSelector.addEventListener("input", (e) => {
            const color = e.target.value;
            const textColor = getTextColor(color)
            // update the category.color
            // call stateController .setCategoryToColor(category, color)
            setCategoryToColor(category, color);
            divs.forEach((div) => {
                div.style.backgroundColor = color;
                div.style.color = textColor;
            })
        })
        
    })

    

    
}

let sortingMode = '';

function sortByInputs() {
    
    const sortableDivs = document.querySelectorAll('.sortable')
    sortableDivs.forEach((sortableDiv) => {
        sortableDiv.addEventListener('click', function(){

            // update sorting mode in stateController
            sortingMode = sortableDiv.textContent.toLowerCase();
            console.log(sortingMode)
            setSortingMode(sortingMode)
            renderPage()

        })
    })
    

}

function getSortingMode() {
    return sortingMode
}



export { initInput, itemListInputs, categoryInputs, getSortingMode, sortByInputs}