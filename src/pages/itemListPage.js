import { getItemList } from "../controllers/stateController.js";

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

    
}


function createItemRow(item) {
    const page = document.querySelector('.page.itemListPage')
    const columns = ['date', 'name', 'cost', 'category', 'description', 'priority', 'X'];
    for (const column of columns) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('itemListItem', column, 'itemListCell');
        if (column == 'X') { colDiv.textContent = 'X'; }
        else { colDiv.textContent = item[column] }

        page.appendChild(colDiv);
    }
}

function createTopRow() {
    const page = document.querySelector('.page.itemListPage')
    const columns = ['date', 'name', 'cost', 'category', 'description', 'priority', 'X'];
    for (const column of columns) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('itemListCategory', column, 'itemListCell');
        colDiv.textContent = column;
        page.appendChild(colDiv);
    }

}

