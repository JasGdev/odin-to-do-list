import addItemPage from '../pages/addItemPage.js'
import itemListPage from '../pages/itemListPage.js';
import categoryRender from '../pages/categoryRender.js';

function initDisplay(){
    renderItemListPage();
}

function renderPage(){
    renderItemListPage();
    renderCategories();
}

function renderAddItemPage(){
    addItemPage(); 
};

function renderItemListPage(){
    itemListPage();
};

function renderCategories(){
    categoryRender();
}

// need a refresh display that detects current active display are reloads it
// by seeing what is teh class of the object inside content depending on that choosing which page to render again

export {renderAddItemPage, initDisplay, renderPage}
