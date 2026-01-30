import addItemPage from '../pages/addItemPage.js'

export default function displayController() {

    function renderAddItemPage(){
        addItemPage(); 
    };

    return {renderAddItemPage}
}