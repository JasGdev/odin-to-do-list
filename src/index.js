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





