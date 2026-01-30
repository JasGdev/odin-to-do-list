import listItem from './listItem.js'
import category from './category.js'

export default function controller(){
    const itemList = [];
    const categoryList = [];
    // based on japan's tax on food items
    const tax = 0.08

    // tally of total spending
    let totalSpending = 0;
    let totalSpendingTax = totalSpending * (1 + tax);

    // add item
    let addItem = (itemName, itemCost, itemCategory, itemDescription, itemDate, itemPaymentMethod, itemPriority,) => {
        // updates itemList
        const newItem = new listItem(itemName, itemCost, itemCategory, itemDescription, itemDate, itemPaymentMethod, itemPriority,);
        itemList.push(newItem)
        // updates categoryList
        const newCategory = new category(itemCategory, categoryList, itemCost, newItem);
        newCategory.addItem(itemCategory, categoryList, itemCost, newItem);
        // update totalSpending
        totalSpending += itemCost;       
    }

    let displayItem = () => {
        console.log(itemList);
        console.log(categoryList);
        console.log(`current spending is $${totalSpending}`)
        
    }

    // remove item

    // add additional information to a specific item

    // change information on items
        return { addItem, displayItem }
}




