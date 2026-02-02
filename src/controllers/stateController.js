import listItem from '../items/listItem.js'
import category from '../items/category.js'
import itemListPage from '../pages/itemListPage.js';

let itemList = [];
let categoryList = [];
const tax = 0.08
let totalSpending = 0;


let addItem = (itemName, itemCost, itemCategory, itemDescription, itemDate, itemPriority,) => {
    const newItem = new listItem(itemName, itemCost, itemCategory, itemDescription, itemDate, itemPriority,);
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
    itemListPage();    
}

let removeItem = (idToRemove) => {
    const itemToRemove = itemList.find((item) => item.id == idToRemove)
    totalSpending -= itemToRemove.cost
    const categoryFound = categoryList.find(categoryInList => categoryInList.nameOfCategory === itemToRemove.category);
    categoryFound.removeItem(idToRemove, itemToRemove.cost)
    itemList = itemList.filter((item) => item.id !== idToRemove);
    itemListPage();
}

let getItemList = () => {
    return itemList
}
    


// add additional information to a specific item

// change information on items
    
// Temporary display item which will be implemented in UI later
let displayItem = () => {
    // displayController.
    console.table(itemList);
    console.table(categoryList);
    console.log(`current spending is $${totalSpending}`)
}

export { addItem, displayItem, removeItem, getItemList,}





