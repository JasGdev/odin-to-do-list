import listItem from '../items/listItem.js'
import category from '../items/category.js'
import { renderPage } from './displayController.js';
import { categoryLoader, itemLoader, deleteHistoryLoader } from './localStorageHelper.js';







let itemList = [];
let categoryList = [];
const tax = 0.08
let sortingMode = 'default';
let categoryToHide = [];
let startMonth = '';
let endMonth = '';
let searchFilter = '';
let currency = '¥';
let deleteHistory = []

// local storage
const initState = () => {
    const storedItems = localStorage.getItem("itemList");
    if (storedItems) {
        itemList = itemLoader(JSON.parse(storedItems));
    }

    const storedDeleteHistory = localStorage.getItem("deleteHistory");
    if (storedDeleteHistory) {
        deleteHistory = deleteHistoryLoader(JSON.parse(storedDeleteHistory));
    }

    const storedCategories = localStorage.getItem('categoryList');
    if (storedCategories) {
        categoryList = categoryLoader(JSON.parse(storedCategories));
    }

    const storedSortingMode = localStorage.getItem('sortingMode')
    if (storedSortingMode) {
        sortingMode = storedSortingMode;
    }

    const storedCategoryToHide = localStorage.getItem('categoryToHide')
    if (storedCategoryToHide) {
        categoryToHide = JSON.parse(storedCategoryToHide);
    }

    const storedStartMonth = localStorage.getItem('startMonth')
    if (storedStartMonth) {
        startMonth = storedStartMonth;
    }

    const storedEndMonth = localStorage.getItem('endMonth')
    if (storedEndMonth) {
        endMonth = storedEndMonth;
    }

    const storedSearchFilter = localStorage.getItem('searchFilter')
    if (storedSearchFilter) {
        searchFilter = storedSearchFilter;
    }
    
};

const storeState = () => {
    localStorage.setItem("itemList", JSON.stringify(itemList))
    localStorage.setItem("deleteHistory", JSON.stringify(deleteHistory))
    localStorage.setItem('categoryList', JSON.stringify(categoryList))
    localStorage.setItem('sortingMode', sortingMode)
    localStorage.setItem('categoryToHide', JSON.stringify(categoryToHide))
    localStorage.setItem('startMonth', startMonth)
    localStorage.setItem('endMonth', endMonth)
    localStorage.setItem('searchFilter', searchFilter)
}

const wipeState = () => {
    localStorage.setItem("itemList", [])
    localStorage.setItem("deleteHistory", [])
    localStorage.setItem('categoryList', [])
    localStorage.setItem('sortingMode', 'default')
    localStorage.setItem('categoryToHide', [])
    localStorage.setItem('startMonth', '')
    localStorage.setItem('endMonth', '')
    localStorage.setItem('searchFilter', '')
    itemList = [];
    categoryList = [];
    sortingMode = 'default';
    categoryToHide = [];
    startMonth = '';
    endMonth = '';
    searchFilter = '';
    deleteHistory = []  
    document.querySelectorAll('input[type="month"], input[type="text"]').forEach(input => {
        input.value = '';
    });
}

// normal operations
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
    // console.log('addItemStored')
    storeState();
    // console.log(localStorage.getItem("itemList"))
}

// delete / undo
let addToDeleteHistory = (item) => {
    deleteHistory.push([item])
}

let removeItem = (idToRemove) => {
    const itemToRemove = getItemById(idToRemove)
    const categoryFound = categoryList.find(categoryInList => categoryInList.nameOfCategory === itemToRemove.category);
    categoryFound.removeItem(idToRemove)
    itemList = itemList.filter((item) => item.id !== idToRemove);
    renderPage();
    storeState();
}

let removeAllCurrentItem = () => {
    const itemsToRemove = getItemList();
    deleteHistory.push(itemsToRemove)
    for (const item of itemsToRemove){
        removeItem(item.getId())
    }
}

let undoDelete = () => { 
    if (deleteHistory.length > 0){
        const itemsToRestore = deleteHistory.pop()
        for (const item of itemsToRestore) {
            addItem(item.name, item.cost, item.category, item.description, item.date, item.priority, item.count, item.id)
        }
        renderPage();
        storeState();

    }
}





let populateWithItems = () => {

    addItem(
        "Groceries",
        45,
        "Food",
        "Weekly supermarket run",
        "2026-02-02",
        3,
        2
    );

    addItem(
        "Netflix Subscription",
        15,
        "Entertainment",
        "Monthly streaming subscription",
        "2026-02-01",
        1,
        1
    );

    addItem(
        "Electricity Bill",
        120,
        "Utilities",
        "January electricity payment",
        "2026-01-28",
        2,
        1
    );

    addItem(
        "Lunch with friends",
        28,
        "Food",
        "Ramen near the office",
        "2026-02-02",
        1,
        1
    );
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

// Category To Hide

// addCategoryToHide and removeCategoryToHide gets called with 'category' name
let resetCategoryToHide = () => {
    categoryToHide = [];
    storeState()
}

let addCategoryToHide = (categoryName) => {
    categoryToHide.push(categoryName)
    storeState()
}

let removeCategoryToHide = (categoryName) => {
    categoryToHide = categoryToHide.filter(category => category != categoryName)
    storeState()
}

let getCategoryToHide = () => {
    return categoryToHide
}

let categoryToHideAll = () => {
    categoryToHide = categoryList.map(category => category.nameOfCategory);
    storeState()
}

// Category Color
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
    storeState()
}

let setStartMonth = (month) => {
    startMonth = month;
    storeState()
}

let setEndMonth = (month) => {
    endMonth = month;
    storeState()
}

// Temporary display item which will be implemented in UI later
let displayItem = () => {

    // console.table(itemList);
    // console.table(categoryList);
    // console.log(`current spending is $${totalSpending}`)
}

let setSearchFilter = (searchValue) => {
    searchFilter = searchValue;
    storeState()
}

let getCurrency = () => {
    return currency
}

let get



export { 
    addItem, displayItem, removeItem, getItemList, getItemById, 
    getCategoryList, resetCategoryToHide, addCategoryToHide, removeCategoryToHide, getCategoryToHide, categoryToHideAll, getCategoryColor, setCategoryToColor,
    setSortingMode, setEndMonth, setStartMonth, setSearchFilter, getCurrency,
    initState, storeState, removeAllCurrentItem, wipeState, addToDeleteHistory, undoDelete, populateWithItems
}





