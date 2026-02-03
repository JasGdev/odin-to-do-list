## Instead of a to do list will instead implement a shopping list


### to-shop-items will have
1. title
2. description
3. dueDate
4. cost (with calculations for tax)
5. checklist
6. payment method (cash, card)
7. priority

### instead of projects will do spending categories that items can be put in

- able to tally up total cost in each category
- default 'project' is just undefined spending
- users are able to then create new spending categories and choose which spending categories their item go into



Index
```bash
# loads controllers
import inputController from './controllers/inputController.js';
import displayController from './controllers/displayController.js';

inputController.init();
displayController.render();
```

State Controller
```bash
# keeps the state values 
let itemList = [];
let categoryList = [];
const tax = 0.08
let totalSpending = 0;

# offers methods to manipulate values
function addItem()
function removeItemById()
function addCategory()
function removeCategory()
function getItemList()
etc
```


Input Controller
```bash
# adds action listener that imports stateListener actions that manipulate the state values
```

Display Controller
```bash
# renders pages as needed imports getItemList/getCategory... from StateController to dictate what to display
```

Sorting options:

1. filter categories
2. sort by 
    - date
    - name
    - cost
    - count
    - total
    - category
3. default sorted by priority/date





