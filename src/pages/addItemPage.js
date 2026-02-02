export default function addItemPage(){
    const content = document.querySelector('.content');
    const modalContent = document.querySelector('.modalContent')
    
    modalContent.innerHTML ='';


    
    // const pageContainer = document.createElement('div');
    // pageContainer.classList.add('pageContainer', 'addItemPage')
    // content.appendChild(pageContainer)


    const page = document.createElement('div');
    page.classList.add('page','addItemPage');
    modalContent.appendChild(page);

    const form  = document.createElement('form');
    form.setAttribute('method', "get");
    form.classList.add('addItemForm')
    page.appendChild(form)

    form.innerHTML += `
    <div class="inputDiv">
        <label for="name">Item name</label>
        <input type="text" name="name" required />
    </div>
    <div class="inputDiv">
        <label for="cost">Cost</label>
        <input type="number" name="cost" required />
    </div>
    <div class="inputDiv">
        <label for="cost">Count</label>
        <input type="number" name="count" required />
    </div>
    <div class="inputDiv">
        <label for="category">Category</label>
        <input type="text" name="category" required />
    </div>
    <div class="inputDiv">
        <label for="description">Description</label>
        <textarea name="description"></textarea>
    </div>
    <div class="inputDiv">
        <label for="date">Date purchased</label>
        <input type="date" name="date"/>
    </div>
    <div class="inputDiv">
        <label for="priority">Priority</label>
        <input type="number" name="priority" />

    </div>
    <div class="form-submit">
    <input type="submit" value="Add item" />
    </div>
    `;



}