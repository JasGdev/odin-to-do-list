import addItemPage from '../pages/addItemPage.js'
import itemListPage from '../pages/itemListPage.js';
import { categoryRender } from '../pages/categoryRender.js';
import summaryPage from '../pages/summaryPage.js';
import { storeState } from './stateController.js';

function initDisplay(){
    renderPage();
}

function renderPage(){
    renderItemListPage();
    renderCategories();
    storeState();
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

function renderSummaryPage(){
    summaryPage();
}
// need a refresh display that detects current active display are reloads it
// by seeing what is teh class of the object inside content depending on that choosing which page to render again

export {renderAddItemPage, initDisplay, renderPage, renderItemListPage, renderSummaryPage}
