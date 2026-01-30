import logicController from "./logicController.js";
import displayController from "./displayController.js"

export default function inputController(displayControl) {

    (function addItemModalSetup(){
        const modal = document.getElementById('myModal');
        const openBtn = document.getElementById('openModalBtn');
        const closeBtn = document.getElementById('closeModalBtn');

        openBtn.addEventListener('click', () => {
            modal.showModal();
        });

        closeBtn.addEventListener('click', () => {
            modal.close();
        });
    })();
    
    (function addItemPagePopup(){
        const modal = document.getElementById('myModal');
        const addBtn = document.querySelector('.addBtn')
        addBtn.addEventListener('click', function (){
           // close when click outside of modal
            modal.addEventListener('click', (e) => {
                const dialogDimensions = modal.getBoundingClientRect();
                if (
                    e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom
                ) {
                    modal.close();
                }
            });


            console.log('pressed')
            displayControl.renderAddItemPage()
        })
    })();


}