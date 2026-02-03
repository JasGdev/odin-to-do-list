import { getCategoryList } from "../controllers/stateController.js";


// have a show all and hide all for the categories

// for each category will show category name, total spending in that category, and number of items in that category
// also have a toggle button to show or hide the category
// have a indication on whether the category is shown or hidden on list view

// categoryToDisplay will be called by in stateController to determine the item list that is returned

const categoryToDisplay = [];
const categoryItemsDiv = document.querySelector('.categoryItems');

export function categoryRender(){
    categoryItemsDiv.innerHTML = '';
    
    const categoryList = getCategoryList();
    console.table(categoryList)

    categoryList.forEach((category) =>{
        const categoryDiv = document.createElement('div');
        const categoryName = document.createElement('div');
        categoryName.textContent = `${category.nameOfCategory} $${category.getTotalSpending()} x${category.getItemCount()}`;
        categoryName.classList.add('categoryName')
        categoryDiv.appendChild(categoryName)
        categoryItemsDiv.appendChild(categoryDiv)


        const categoryItemDisplay = document.createElement('div');

        



    })


}

export function getCategoryToDisplay(){
    return categoryToDisplay
}