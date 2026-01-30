// src/index.js
import "./styles.css";
import listItem from './listItem.js'
import category from './category.js'
import controller from "./controller.js";


let control = controller()
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

