import listItem from '../items/listItem.js'
import category from '../items/category.js'
import { renderPage } from './displayController.js';

let itemList = [];
let categoryList = [];
const tax = 0.08
let totalSpending = 0;
// 'default', 
let sortingMode = 'default';


let addItem = (itemName, itemCost, itemCategory, itemDescription, itemDate, itemPriority, itemCount) => {
    const newItem = new listItem(itemName, itemCost, itemCategory, itemDescription, itemDate, itemPriority, itemCount);
    itemList.push(newItem)
    const categoryFound = categoryList.find(categoryInList => categoryInList.nameOfCategory === itemCategory);
    if (categoryFound) {
        categoryFound.addItem(newItem);
    } else {
        const newCategory = new category(itemCategory);
        newCategory.addItem(newItem)
        categoryList.push(newCategory)
    }
    totalSpending += itemCost;   
    renderPage();    
}

let removeItem = (idToRemove) => {
    const itemToRemove = getItemById(idToRemove)
    totalSpending -= itemToRemove.total
    const categoryFound = categoryList.find(categoryInList => categoryInList.nameOfCategory === itemToRemove.category);
    categoryFound.removeItem(idToRemove)
    itemList = itemList.filter((item) => item.id !== idToRemove);
    renderPage();
}

let getItemList = () => {
    if (sortingMode == 'default'){
        return itemList
    }
    
}

let getItemById = (itemId) => {
    return itemList.find((item) => item.id === itemId)
}

let getCategoryList = () => {
    return categoryList
}
    


// add additional information to a specific item

// change information on items
    
// Temporary display item which will be implemented in UI later
let displayItem = () => {

    console.table(itemList);
    // console.table(categoryList);
    // console.log(`current spending is $${totalSpending}`)
}

export { addItem, displayItem, removeItem, getItemList, getItemById, getCategoryList}





