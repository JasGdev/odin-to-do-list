import {
  getItemList,
  getCategoryList,
  addItemToState,
  removeItemFromState
} from './stateController.js';



const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');

// for adding item
(function addItemModalSetup(){
    openBtn.addEventListener('click', () => {
        modal.showModal();
    });

    closeBtn.addEventListener('click', () => {
        modal.close();
    });
})();

(function addItemPagePopup(){
    const addBtn = document.querySelector('.addBtn')
    addBtn.addEventListener('click', function (){
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
        });
        displayControl.renderAddItemPage()
        addItemSubmit()
    })
})();

function getCurrentTime(){
    const now = new Date();
    const today =
        now.getFullYear() + "-" +
        String(now.getMonth() + 1).padStart(2, "0") + "-" +
        String(now.getDate()).padStart(2, "0");
    return today
}

function addItemSubmit(){
    const addItemForm = document.querySelector('.addItemForm')
    addItemForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const itemName = addItemForm.name.value;
        const itemCost = Number(addItemForm.cost.value);
        const itemCategory = addItemForm.category.value;
        const itemDescription = addItemForm.description.value;

        let dateValue = '';
        if (addItemForm.date.value == ''){
            dateValue = getCurrentTime();
        } else {
            dateValue = addItemForm.date.value;
        }
        const itemDate = dateValue;


        const itemPriority = addItemForm.priority.value;
        logicControl.addItem(itemName, itemCost, itemCategory, itemDescription, itemDate, itemPriority,);
        addItemForm.reset();
        modal.close();

        // want to call the display controller here to REFRESH DISPLAY
    })
    
};



export {}