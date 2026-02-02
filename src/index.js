// src/index.js
import "./styles/styles.css";
import "./styles/sidebar.css";
import "./styles/addItemPage.css";
import "./styles/itemListPage.css";

import { initInput, itemListInputs } from "./controllers/inputController.js";
import { initDisplay } from "./controllers/displayController.js";
import { addItem, displayItem } from "./controllers/stateController.js";

initInput();
initDisplay();

addItem(
    "Groceries",
    45,
    "Food",
    "Weekly supermarket run",
    "2026-02-02",
    3,
    2
);

addItem(
    "Netflix Subscription",
    15,
    "Entertainment",
    "Monthly streaming subscription",
    "2026-02-01",
    1,
    1
);

addItem(
    "Electricity Bill",
    120,
    "Utilities",
    "January electricity payment",
    "2026-01-28",
    2,
    1
);

addItem(
    "Lunch with friends",
    28,
    "Food",
    "Ramen near the office",
    "2026-02-02",
    1,
    1
);

displayItem()
