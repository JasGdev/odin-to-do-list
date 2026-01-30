import listItem from './listItem.js'
import category from './category.js'

export default function controller(){
    const itemList = [];
    const categoryList = [];
    // based on japan's tax on food items
    const tax = 0.08

    // tally of total spending
    let totalSpending = 0;

    // add item
    let addItem = (itemName, itemCost, itemCategory, itemDescription, itemDate, itemPaymentMethod, itemPriority,) => {
        // updates itemList
        const newItem = new listItem(itemName, itemCost, itemCategory, itemDescription, itemDate, itemPaymentMethod, itemPriority,);
        itemList.push(newItem)
        // updates categoryList
        const categoryFound = categoryList.find(categoryInList => categoryInList.nameOfCategory === itemCategory);
        if (categoryFound) {
            categoryFound.addItem(newItem);
        } else {
            const newCategory = new category(itemCategory);
            newCategory.addItem(newItem)
            categoryList.push(newCategory)
        }



        // update totalSpending
        totalSpending += itemCost;       
    }
    // remove item


    // add additional information to a specific item

    // change information on items
        
    // Temporary displayitem which will be implemented in UI later
    let displayItem = () => {
        console.log(itemList);
        console.log(categoryList);
        console.log(`current spending is $${totalSpending}`)

    }
    
    return { addItem, displayItem }
}




