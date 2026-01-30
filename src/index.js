// src/index.js
import "./styles/styles.css";
import "./styles/sidebar.css";
import "./styles/addItemPage.css";

import logicController from "./controllers/logicController.js";
import displayController from './controllers/displayController.js'
import inputController from "./controllers/inputController.js";



// Input Controller calls the logic controller and display controller
// Logic controller tells the display controller what to display

const control = logicController()
const displayControl = displayController()
inputController(displayControl, control)

// inputController(displayControl);


control.addItem("Groceries",
    1,
    "Food",
    "Weekly supermarket shopping",
    "2026-02-02",
    "Medium");

control.addItem(
    "Train Pass",
    1,
    "Transport",
    "Monthly commuter pass",
    "2026-02-01",
    "High");

control.addItem(
    "Laptop Repair",
    1,
    "Maintenance",
    "Keyboard replacement",
    "2026-02-05",
    "High");

control.addItem(
    "Bike Repair",
    1,
    "Maintenance",
    "Keyboard replacement",
    "2026-02-05",
    "High");

control.displayItem();




globalThis.control = control;

