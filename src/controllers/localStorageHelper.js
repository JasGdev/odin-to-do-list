import listItem from "../items/listItem.js"
import category from "../items/category.js"

function categoryLoader(parsedCategoryList) {
    const categoryList = []
    for (const cat of parsedCategoryList) {
        categoryList.push(new category(cat.nameOfCategory, itemLoader(cat.items), cat.color))
    }
    return categoryList
}

function itemLoader(parsedItemList) {
    const itemList = []
    for (const item of parsedItemList) {
        itemList.push(new listItem(
            item.name, item.cost, item.category, item.description,
            item.date, item.priority, item.count, item.id))

    }
    return itemList
}

function deleteHistoryLoader(parsedDeleteHistory) {
    const deleteHistory = []
    for (const deleteHistorySubArray of parsedDeleteHistory){
        const deleteHistorySubArrayLoaded = itemLoader(deleteHistorySubArray)
        deleteHistory.push(deleteHistorySubArrayLoaded)
    }
    return deleteHistory
}




function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            e.name === "QuotaExceededError" &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

export {categoryLoader, itemLoader, storageAvailable, deleteHistoryLoader}