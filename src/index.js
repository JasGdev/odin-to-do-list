// src/index.js
import "./styles/styles.css";
import "./styles/sidebar.css";
import "./styles/addItemPage.css";
import "./styles/itemListPage.css";
import "./styles/categoryRender.css"
import "./styles/summary.css"

import { initInput } from "./controllers/inputController.js";
import { initDisplay } from "./controllers/displayController.js";
import {addItem, getItemList, getCategoryList, initState, getCategoryToHide} from "./controllers/stateController.js";
import category from "./items/category.js"
import listItem from "./items/listItem.js"
import { storageAvailable } from "./controllers/localStorageHelper.js";
storageAvailable


initState();
initDisplay();  
initInput();
console.log(getItemList());
console.log(getCategoryList())
console.log(getCategoryToHide())



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

// addItem(
//     "Electricity Bill",
//     120,
//     "Utilities",
//     "January electricity payment",
//     "2026-01-28",
//     2,
//     1
// );

// addItem(
//     "Lunch with friends",
//     28,
//     "Food",
//     "Ramen near the office",
//     "2026-02-02",
//     1,
//     1
// );



