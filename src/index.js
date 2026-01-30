// src/index.js
import "./styles.css";
import listItem from './items/listItem.js'
import category from './items/category.js'
import logicController from "./controllers/logicController.js";
import displayController from './controllers/displayController.js'
import inputController from "./controllers/inputController.js";

// Input Controller calls the logic controller and display controller
// Logic controller tells the display controller what to display

const control = logicController()
const displayControl = displayController()
inputController(displayControl)

// inputController(displayControl);


control.addItem("Groceries",
    1,
    "Food",
    "Weekly supermarket shopping",
    "2026-02-02",
    "Credit Card",
    "Medium");

control.addItem(
    "Train Pass",
    1,
    "Transport",
    "Monthly commuter pass",
    "2026-02-01",
    "IC Card",
    "High");

control.addItem(
    "Laptop Repair",
    1,
    "Maintenance",
    "Keyboard replacement",
    "2026-02-05",
    "Cash",
    "High");

control.addItem(
    "Bike Repair",
    1,
    "Maintenance",
    "Keyboard replacement",
    "2026-02-05",
    "Cash",
    "High");

control.displayItem();




globalThis.control = control;

