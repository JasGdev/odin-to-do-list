
// gets called by renderItemListPage() in displayController
export default function itemListPage(itemList) {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const page = document.createElement('div');
    page.classList.add('page', 'itemListPage');
    content.appendChild(page);
    console.log(itemList)
    
    console.log(itemList)
    for (const item of itemList){
        console.log('A')
        // createItemRow(item);
    }


    function createItemRow(){
        const page = document.querySelector('.page.itemListPage') 
        const columns = ['name', 'cost', 'category', 'description', 'date', 'priority', 'X'];
        for (const column of columns){
            const colDiv = document.createElement('div');
            colDiv.classList.add(column, 'itemLastPage');
            colDiv.textContent = column;
            page.appendChild(colDiv);
        }
    // by feeding it a item it will create 7 divs (6 for item 1 for delete)
    // and add it to the page
    }





}