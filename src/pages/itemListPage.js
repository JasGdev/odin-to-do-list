    import { itemListInputs } from "../controllers/inputController.js";
    import { getItemList } from "../controllers/stateController.js";

    const columns = ['date', 'name', 'cost', 'count' , 'total', 'category', 'description', 'priority', 'X'];
    const currency = '¥';

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
            colDiv.valueType = column;
            if (column == 'X') { 
                createCloseButton(colDiv, item.id) 
                colDiv.classList.add('itemListCell')
            } 
            else { 
                if (column == 'cost' || column == 'total'){
                    colDiv.textContent = currency + item[column] 
                    colDiv.classList.add('itemListItem', 'itemListCell', 'number');
                } else {
                    colDiv.textContent = item[column] 
                    colDiv.classList.add('itemListItem', 'itemListCell');
                }
                
                colDiv.dataset.itemID = item.id;
                colDiv.dataset.infoType = column;
                
            }
            page.appendChild(colDiv);
        }
    }

    function createTopRow() {
        const page = document.querySelector('.page.itemListPage')
        for (const column of columns) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('itemListCategory', 'itemListCell');
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
        closeBtn.dataset.itemID = itemId;
        closeBtn.textContent = '✕';
        colDiv.appendChild(closeBtn)
    }

