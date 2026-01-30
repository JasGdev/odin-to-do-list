import addItemPage from '../pages/addItemPage.js'
import itemListPage from '../pages/itemListPage.js';

export default function displayController(logicControl) {
    function renderAddItemPage(){
        addItemPage(); 
    };

    (function renderItemListPage(){
        itemListPage(logicControl.getItemList());
    })();

    // need a refresh display that detects current active display are reloads it
    // by seeing what is teh class of the object inside content depending on that choosing which page to render again

    return {renderAddItemPage}
}