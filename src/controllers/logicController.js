import listItem from '../items/listItem.js'
import category from '../items/category.js'
import displayController from './displayController.js'

export default function logicController(){
    let itemList = [];
    let categoryList = [];
    // based on japan's tax on food items
    const tax = 0.08

    // tally of total spending
    let totalSpending = 0;


    // // add item
    // let addItem = (itemName, itemCost, itemCategory, itemDescription, itemDate, itemPriority,) => {
    //     // updates itemList
    //     const newItem = new listItem(itemName, itemCost, itemCategory, itemDescription, itemDate, itemPriority,);
    //     itemList.push(newItem)
    //     // updates categoryList
    //     const categoryFound = categoryList.find(categoryInList => categoryInList.nameOfCategory === itemCategory);
    //     if (categoryFound) {
    //         categoryFound.addItem(newItem);
    //     } else {
    //         const newCategory = new category(itemCategory);
    //         newCategory.addItem(newItem)
    //         categoryList.push(newCategory)
    //     }
    //     totalSpending += itemCost;       
    // }

    let addItem = () => {
        // call displayController to bring up addItem page
        // addItem page will have 
    }




    // remove item by id
    let removeItem = (idToRemove) => {
        const itemToRemove = itemList.find((item) => item.id == idToRemove)
        console.log(itemToRemove)
        totalSpending -= itemToRemove.cost
        // remove item from category
        const categoryFound = categoryList.find(categoryInList => categoryInList.nameOfCategory === itemToRemove.category);
        categoryFound.removeItem(idToRemove, itemToRemove.cost)
        // remove item from itemList
        itemList = itemList.filter((item) => item.id !== idToRemove);
    }


    // add additional information to a specific item

    // change information on items
        
    // Temporary display item which will be implemented in UI later
    let displayItem = () => {
        console.log(itemList);
        console.log(categoryList);
        console.log(`current spending is $${totalSpending}`)

    }
    
    return { addItem, displayItem, removeItem, }
}




