import listItem from '../items/listItem.js'
import category from '../items/category.js'
import { renderPage } from './displayController.js';

let itemList = [];
let categoryList = [];
const tax = 0.08
let sortingMode = 'default';
let categoryToHide = [];



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
    renderPage();    
}

let removeItem = (idToRemove) => {
    const itemToRemove = getItemById(idToRemove)

    const categoryFound = categoryList.find(categoryInList => categoryInList.nameOfCategory === itemToRemove.category);
    categoryFound.removeItem(idToRemove)
    itemList = itemList.filter((item) => item.id !== idToRemove);
    renderPage();
}

let getItemList = () => {
    let itemListToReturn = itemList.slice();
    categoryToHide.forEach((category) => {
        itemListToReturn = itemListToReturn.filter(item => item.category !== category)
    })
    if (sortingMode == 'default'){
        return itemListToReturn
    }
    
}

let getItemById = (itemId) => {
    return itemList.find((item) => item.id === itemId)
}

let getCategoryList = () => {
    return categoryList
}

let resetCategoryToHide = () => {
    categoryToHide = [];
}

let addCategoryToHide = (category) => {
    categoryToHide.push(category)
}

let removeCategoryToHide = (category) => {
    categoryToHide = categoryToHide.filter(item => item.nameOfCategory == category)
}

let getCategoryToHide = () => {
    return categoryToHide
}

let categoryToHideAll = () => {
    categoryToHide = categoryList.map(category => category.nameOfCategory);
}
    


// add additional information to a specific item

// change information on items
    
// Temporary display item which will be implemented in UI later
let displayItem = () => {

    // console.table(itemList);
    // console.table(categoryList);
    // console.log(`current spending is $${totalSpending}`)
}

export { 
    addItem, displayItem, removeItem, getItemList, getItemById, 
    getCategoryList, resetCategoryToHide, addCategoryToHide, removeCategoryToHide, getCategoryToHide, categoryToHideAll }





