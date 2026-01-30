import logicController from "./logicController.js";
import displayController from "./displayController.js"

export default function inputController(displayControl) {

    (function addItemPagePopup(){
        const addBtn = document.querySelector('.addBtn')
        addBtn.addEventListener('click', function (){
            console.log('pressed')
            displayControl.renderAddItemPage()
        })
    })();


}