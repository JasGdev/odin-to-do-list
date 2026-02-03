import { categoryInputs } from "../controllers/inputController.js";
import { getCategoryList, getCategoryToHide } from "../controllers/stateController.js";


// have a show all and hide all for the categories

// for each category will show category name, total spending in that category, and number of items in that category
// also have a toggle button to show or hide the category
// have a indication on whether the category is shown or hidden on list view

// categoryToDisplay will be called by in stateController to determine the item list that is returned


const categoryItemsDiv = document.querySelector('.categoryItems');

export function categoryRender(){
    categoryItemsDiv.innerHTML = '';
    
    const categoryList = getCategoryList();

    // show all and hide all button
    const categoryBtnContainer = document.createElement('div')
    categoryBtnContainer.classList.add('categoryBtnContainer');

    const hideAllBtn = document.createElement('button');
    hideAllBtn.textContent = 'Hide all'
    hideAllBtn.classList.add('hideAllBtn')

    const showAllBtn = document.createElement('button');
    showAllBtn.textContent = 'Show all'
    showAllBtn.classList.add('showAllBtn')

    categoryBtnContainer.appendChild(showAllBtn)    
    categoryBtnContainer.appendChild(hideAllBtn)
    categoryItemsDiv.appendChild(categoryBtnContainer)



    categoryList.forEach((category) =>{
        const categoryDiv = document.createElement('div');
        const categoryRow = document.createElement('div');
        
        
        const categoryInfo = document.createElement('div');
        categoryInfo.innerHTML = `
        <div class="categoryName">${category.nameOfCategory}</div>
        <div class="categorySpending">$${category.getTotalSpending()}</div>
        `
        categoryInfo.classList.add('categoryInfo')

        categoryRow.appendChild(categoryInfo)
        
        categoryRow.classList.add('categoryRow')
        categoryDiv.appendChild(categoryRow)
        categoryItemsDiv.appendChild(categoryDiv)

        const categoryControl = document.createElement('div');
        const categoryToHide = getCategoryToHide();
        if (categoryToHide.includes(category.nameOfCategory)){
            categoryControl.innerHTML = `
            <form>
                <input class = 'categoryColor' type = 'color' id="${category.nameOfCategory}Color" name="categoryColor" value="${category.color}">
                <input class = 'categoryShow' type="checkbox" id="${category.nameOfCategory}Show" name="categoryShow" value="${category.nameOfCategory}" > 
            </form>
            `
        } else {
            categoryControl.innerHTML = `
            <form>
                <input class = 'categoryColor' type = 'color' id="${category.nameOfCategory}Color" name="categoryColor" value="${category.color}">
                <input class = 'categoryShow' type="checkbox" id="${category.nameOfCategory}Show" name="categoryShow" value="${category.nameOfCategory}" checked> 
            </form>
            `

        }

        
       
        categoryRow.appendChild(categoryControl)



        const categoryItemDisplay = document.createElement('div');

        



    })
    categoryInputs()

}
