// src/index.js
import "./styles/styles.css";
import "./styles/sidebar.css";
import "./styles/addItemPage.css";
import "./styles/itemListPage.css";
import "./styles/categoryRender.css"
import "./styles/summary.css"

import { initInput } from "./controllers/inputController.js";
import { initDisplay } from "./controllers/displayController.js";
import {addItem, initState} from "./controllers/stateController.js";
import category from "./items/category.js"
import listItem from "./items/listItem.js"
import { storageAvailable } from "./controllers/localStorageHelper.js";
storageAvailable

// if (storageAvailable("localStorage")) {
//     console.log('YES')// Yippee! We can use localStorage awesomeness
// } else {
//     console.log('NO')
//     // Too bad, no localStorage for us
// }


initInput();

initState();
initDisplay();  


// addItem(
//     "Groceries",
//     45,
//     "Food",
//     "Weekly supermarket run",
//     "2026-02-02",
//     3,
//     2
// );

// addItem(
//     "Netflix Subscription",
//     15,
//     "Entertainment",
//     "Monthly streaming subscription",
//     "2026-02-01",
//     1,
//     1
// );

// state.addItem(
//     "Electricity Bill",
//     120,
//     "Utilities",
//     "January electricity payment",
//     "2026-01-28",
//     2,
//     1
// );

// state.addItem(
//     "Lunch with friends",
//     28,
//     "Food",
//     "Ramen near the office",
//     "2026-02-02",
//     1,
//     1
// );


// let categoryList = state.getCategoryList()
// let itemList = state.getItemList()


// let stringifyCategoryList = JSON.stringify(categoryList)
// let stringifyItemList = JSON.stringify(itemList)

// let parsedCategoryList = JSON.parse(stringifyCategoryList)
// let parsedItemList = JSON.parse(stringifyItemList)

// let categoryToHide = state.getCategoryToHide();
// let stringifyCategoryToHide = JSON.stringify(categoryToHide);
// let parsedCategoryToHide = JSON.parse(stringifyCategoryToHide)

// function categoryLoader(parsedCategoryList){
//     const categoryList = []
//     for (const cat of parsedCategoryList) {
//         categoryList.push(new category(cat.nameOfCategory, itemLoader(cat.items), cat.color))
//     }
//     return categoryList
// }

// function itemLoader(parsedItemList){
//     const itemList = []
//     for (const item of parsedItemList){
//         itemList.push(new listItem(
//             item.name, item.cost, item.category, item.description,
//             item.date, item.priority, item.count, item.id))

//     }
//     return itemList
// }

// console.log(parsedCategoryToHide)




// console.log(categoryLoader(parsedCategoryList))
// console.log(itemLoader(parsedItemList));



