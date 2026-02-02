import { itemListInputs } from "../controllers/inputController.js";
import { getItemList } from "../controllers/stateController.js";

const columns = ['date', 'name', 'cost', 'category', 'description', 'priority', 'X'];

export default function itemListPage() {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const page = document.createElement('div');
    page.classList.add('page', 'itemListPage');
    content.appendChild(page);
    
    createTopRow();
    for (const item of getItemList()){
        createItemRow(item);
    }

    itemListInputs();

    
}


function createItemRow(item) {
    const page = document.querySelector('.page.itemListPage')
    for (const column of columns) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('itemListItem', column, 'itemListCell');
        if (column == 'X') { 
            createCloseButton(colDiv, item.id) 
        }
        else { colDiv.textContent = item[column] }

        page.appendChild(colDiv);
    }
}

function createTopRow() {
    const page = document.querySelector('.page.itemListPage')
    for (const column of columns) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('itemListCategory', column, 'itemListCell');
        if (column == 'X') { 
            createCloseButton(colDiv, 'topRowClose') 
        }
        else { colDiv.textContent = column.charAt(0).toUpperCase() + column.substring(1) }
        page.appendChild(colDiv);
    }

}

function createCloseButton(colDiv, itemId) {
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('closeBtn');
    closeBtn.id = itemId;
    closeBtn.textContent = '✕';
    colDiv.appendChild(closeBtn)
}

