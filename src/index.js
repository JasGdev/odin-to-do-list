// src/index.js
import "./styles/styles.css";
import "./styles/sidebar.css";
import "./styles/addItemPage.css";
import "./styles/itemListPage.css";


import logicController from "./controllers/logicController.js";
import displayController from './controllers/displayController.js'
import inputController from "./controllers/inputController.js";



// Input Controller calls the logic controller and display controller
// Logic controller tells the display controller what to display

const logicControl = logicController()
const displayControl = displayController(logicControl)
inputController(displayControl, logicControl)

displayControl.renderItemListPage();



// inputController(displayControl);


logicControl.addItem("Groceries",
    1,
    "Food",
    "Weekly supermarket shopping",
    "2026-02-02",
    "Medium");

logicControl.addItem(
    "Train Pass",
    1,
    "Transport",
    "Monthly commuter pass",
    "2026-02-01",
    "High");

logicControl.addItem(
    "Laptop Repair",
    1,
    "Maintenance",
    "Keyboard replacement",
    "2026-02-05",
    "High");

logicControl.addItem(
    "Bike Repair",
    1,
    "Maintenance",
    "Keyboard replacement",
    "2026-02-05",
    "High");

logicControl.displayItem();




globalThis.control = logicControl;

