import addItemPage from '../pages/addItemPage.js'
import itemListPage from '../pages/itemListPage.js';

import {
  getItemList,
  getCategoryList,
} from './stateController.js';


function renderAddItemPage(){
    addItemPage(); 
};

function renderItemListPage(){

};

// need a refresh display that detects current active display are reloads it
// by seeing what is teh class of the object inside content depending on that choosing which page to render again

export {renderAddItemPage, renderItemListPage}
