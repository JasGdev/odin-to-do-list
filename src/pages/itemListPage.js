    import { getSortingMode, itemListInputs, sortByInputs } from "../controllers/inputController.js";
    import { getCategoryColor, getItemList } from "../controllers/stateController.js";
import { getTextColor } from "../controllers/utils.js";

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
        sortByInputs();
    }


    function createItemRow(item) {
        const page = document.querySelector('.page.itemListPage')
        const itemCategory = item.category;
        for (const column of columns) {
            const colDiv = document.createElement('div');
            colDiv.valueType = column;
            if (column == 'X') { 
                createCloseButton(colDiv, item.id) 
                colDiv.classList.add('itemListCell')
            } 
            else { 
                if (column == 'cost'){
                    colDiv.textContent = currency + item[column] 
                    colDiv.classList.add('itemListItem', 'itemListCell', 'number', 'editable', 'cost');
                    colDiv.dataset.itemID = item.id;
                    colDiv.dataset.infoType = column;
                    colDiv.dataset.itemCategory = item.category;
                } else if (column == 'total'){
                    colDiv.textContent = currency + item['cost'] * item['count']
                    colDiv.classList.add('itemListItem', 'itemListCell', 'number', 'total');
                    colDiv.dataset.itemID = item.id;
                    colDiv.dataset.infoType = column;
                    colDiv.dataset.itemCategory = item.category;
                } else if (column == 'count'){
                    const countContainer = document.createElement('div')
                    countContainer.classList.add('countContainer')

                    const increaseCountBtn = document.createElement('button')
                    increaseCountBtn.classList.add('increaseCountBtn', 'countBtn')
                    increaseCountBtn.dataset.itemID = item.id;
                    increaseCountBtn.dataset.type = 'increase';
                    increaseCountBtn.textContent = '+'

                    const countDiv = document.createElement('div')
                    countDiv.classList.add('countDiv')
                    countDiv.dataset.itemCategory = item.category;
                    countDiv.style.backgroundColor = getCategoryColor(itemCategory);
                    countDiv.style.color = getTextColor(getCategoryColor(itemCategory))

                    // make a div for the number
                    const countDivValue = document.createElement('div')
                    countDivValue.classList.add('countDivValue')
                    countDivValue.textContent = item[column]
                    

                    countDiv.appendChild(countDivValue)
                    countDiv.classList.add('number', 'editable');
                    countDiv.dataset.itemID = item.id;
                    countDiv.dataset.infoType = column;

                    const decreaseCountBtn = document.createElement('button')
                    decreaseCountBtn.classList.add('decreaseCountBtn', 'countBtn')
                    decreaseCountBtn.dataset.itemID = item.id;
                    decreaseCountBtn.dataset.type = 'decrease';
                    decreaseCountBtn.textContent = '-'

                    colDiv.dataset.infoType = column;
                    countContainer.appendChild(increaseCountBtn);
                    countContainer.appendChild(countDiv);
                    countContainer.appendChild(decreaseCountBtn);
                    colDiv.appendChild(countContainer)
                }
                else {
                    colDiv.textContent = item[column]
                    colDiv.classList.add('itemListItem', 'itemListCell', 'editable');
                    colDiv.dataset.itemID = item.id;
                    colDiv.dataset.infoType = column;
                    colDiv.dataset.itemCategory = item.category;
                }     
            }
            
            colDiv.style.backgroundColor = getCategoryColor(itemCategory);
            colDiv.style.color = getTextColor(getCategoryColor(itemCategory))
            page.appendChild(colDiv);
        }
    }

    function createTopRow() {
        
        const page = document.querySelector('.page.itemListPage')
        for (const column of columns) {

            const colDiv = document.createElement('div');

            colDiv.classList.add('itemListCategory', 'itemListCell');
            if (['date', 'name', 'cost', 'count', 'total', 'category', 'sortable', 'priority'].includes(column)){
                colDiv.classList.add('sortable')
            }
            if (column == 'X') { 
                createCloseButton(colDiv, 'topRowClose') 
            }
            else { 
                if (getSortingMode() == column) {
                    colDiv.style.backgroundColor = 'black';
                    colDiv.style.color = 'white';
                    colDiv.textContent = '▲' + column.charAt(0).toUpperCase() + column.substring(1)
                } else if (getSortingMode() == column + 'Reverse') {
                    colDiv.style.backgroundColor = 'white';
                    colDiv.style.color = 'black';
                    colDiv.textContent = '▼' + column.charAt(0).toUpperCase() + column.substring(1)
                } else {
                    colDiv.textContent = column.charAt(0).toUpperCase() + column.substring(1);
                }
                
                
                 }
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

