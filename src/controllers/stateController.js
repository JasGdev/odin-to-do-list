import listItem from '../items/listItem.js'
import category from '../items/category.js'
import { renderPage } from './displayController.js';

let itemList = [];
let categoryList = [];
const tax = 0.08
let sortingMode = 'default';
let categoryToHide = [];
let startMonth = '';
let endMonth = '';
let searchFilter = '';
let currency = '¥';



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

const sortByPriority = (arr) => {
    arr.sort((a, b) => a.priority - b.priority);
}

let getItemList = () => {
    let itemListToReturn = itemList.slice();
    // default sort by priority
    sortByPriority(itemListToReturn);
    
    // category filter
    categoryToHide.forEach((category) => {
        itemListToReturn = itemListToReturn.filter(item => item.category !== category)
    })

    // month filter 
    // if only start month is chosen (display only items in that month)
    // if both are chosen (display items from star to end month)
    // if only end month are chose (display items until end month)
    if (startMonth !== '' && endMonth == '') {
        itemListToReturn = itemListToReturn.filter(item => item.date.slice(0, 7) == startMonth)
    } else if (startMonth !== '' && endMonth !== ''){
        itemListToReturn = itemListToReturn.filter(item => (item.date.slice(0, 7) >= startMonth &&  item.date.slice(0, 7) <= endMonth))
    } else if (startMonth == '' && endMonth !== ''){
        itemListToReturn = itemListToReturn.filter(item => item.date.slice(0, 7) <= endMonth)
    }

    // search filter
    if (searchFilter !== ''){
        itemListToReturn = itemListToReturn.filter(item => 
            item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.cost.toString().toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.count.toString().toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.date.toString().toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.priority.toString().toLowerCase().includes(searchFilter.toLowerCase()) 
        )
    }



    // sorting depending on sorting mode
    switch (sortingMode) {
        case 'default':
            return itemListToReturn
        case 'date':
            return itemListToReturn.sort((a, b) => new Date(a.date) - new Date(b.date))
        case 'dateReverse':
            return itemListToReturn.sort((a, b) => new Date(b.date) - new Date(a.date))
        case 'name':
            return itemListToReturn.sort((a, b) => a.name.localeCompare(b.name))
        case 'nameReverse':
            return itemListToReturn.sort((a, b) => b.name.localeCompare(a.name))
        case 'cost':
            return itemListToReturn.sort((a, b) => a.cost - b.cost);
        case 'costReverse':
            return itemListToReturn.sort((a, b) => b.cost - a.cost);
        case 'count':
            return itemListToReturn.sort((a, b) => a.count - b.count);
        case 'countReverse':
            return itemListToReturn.sort((a, b) => b.count - a.count);
        case 'total':
            return itemListToReturn.sort((a, b) => a.getTotalForItem() - b.getTotalForItem());
        case 'totalReverse':
            return itemListToReturn.sort((a, b) => b.getTotalForItem() - a.getTotalForItem());
        case 'category':
            return itemListToReturn.sort((a, b) => a.category.localeCompare(b.category))
        case 'categoryReverse': 
            return itemListToReturn.sort((a, b) => b.category.localeCompare(a.cat))
        case 'priority':
            return itemListToReturn.sort((a, b) => a.priority - b.priority);
        case 'priorityReverse':
            return itemListToReturn.sort((a, b) => b.priority - a.priority);
    }

    
}

let setSortingMode = (mode) => {
    sortingMode = mode;
}


let getItemById = (itemId) => {
    return itemList.find((item) => item.id === itemId)
}

let getCategoryList = () => {
    categoryList = categoryList.filter(category => category.items.length > 0);
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

let getCategoryColor = (category) => {
    const foundCategory = categoryList.find(
        c => c.nameOfCategory == category
    )
    return foundCategory.color
}

let setCategoryToColor = (category, color) => {
    const foundCategory = categoryList.find(
        c => c.nameOfCategory == category
    )
    foundCategory.color = color;
}

let setStartMonth = (month) => {
    startMonth = month;
}

let setEndMonth = (month) => {
    endMonth = month;
}

// Temporary display item which will be implemented in UI later
let displayItem = () => {

    // console.table(itemList);
    // console.table(categoryList);
    // console.log(`current spending is $${totalSpending}`)
}

let setSearchFilter = (searchValue) => {
    searchFilter = searchValue;
}

let getCurrency = () => {
    return currency
}


export { 
    addItem, displayItem, removeItem, getItemList, getItemById, 
    getCategoryList, resetCategoryToHide, addCategoryToHide, removeCategoryToHide, getCategoryToHide, categoryToHideAll, getCategoryColor, setCategoryToColor,
    setSortingMode, setEndMonth, setStartMonth, setSearchFilter, getCurrency}





