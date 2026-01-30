export default function itemListPage(itemList) {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const page = document.createElement('div');
    page.classList.add('page', 'itemListPage');
    content.appendChild(page);
    
    page.style.backgroundColor = 'red';




    function createItemRow(item){

        const fields = ['name', 'cost', 'category', 'description', 'date', 'priority'];

        const divs = fields.map(field => {
            const div = document.createElement('div');
            div.textContent = item[field];
            return div;
        });

        divs.forEach(div => container.appendChild(div));

    // by feeding it a item it will create 7 divs (6 for item 1 for delete)
    // and add it to the page
    }





}