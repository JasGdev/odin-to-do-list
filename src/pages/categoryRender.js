import { getCategoryList } from "../controllers/stateController.js";


// have a show all and hide all for the categories

// for each category will show category name, total spending in that category, and number of items in that category
// also have a toggle button to show or hide the category
// have a indication on whether the category is shown or hidden on list view
export default function categoryRender(){
    const categoryList = getCategoryList();
    const categoryItemsDiv = document.querySelector('.categoryItems');
    categoryList.forEach((category) => function(){
        const categoryDiv = document.createElement('div');

        const categoryName = document.createElement('div');
        categoryName.textContent = category.name;
        categoryName.classList.add('categoryName')

        const categoryItemDisplay = document.createElement('div');

        



    })


}