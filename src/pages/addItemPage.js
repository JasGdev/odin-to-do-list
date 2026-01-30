export default function addItemPage(){
    



    const content = document.querySelector('.content');
    content.innerHTML = '';

    const modal = document.createElement('dialog');


    const pageContainer = document.createElement('div');
    pageContainer.classList.add('pageContainer', 'addItemPage')
    content.appendChild(pageContainer)
    const page = document.createElement('div');
    page.classList.add('page','addItemPage');
    pageContainer.appendChild(page);

    const form  = document.createElement('form');
    form.setAttribute('method', "get");
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
        <label for="name">Item name</label>
        <input type="text" name="name" required />
    </div>
    <div class="inputDiv">
        <label for="name">Item name</label>
        <input type="text" name="name" required />
    </div>
    <div class="inputDiv">
        <label for="name">Item name</label>
        <input type="text" name="name" required />
    </div>
    <div class="inputDiv">
        <label for="name">Item name</label>
        <input type="text" name="name" required />
    </div>
    <div class="form-submit">
    <input type="submit" value="Add item" />
    </div>




    `;



    // //name input
    // const nameInputDiv = document.createElement('div');
    // nameInputDiv.classList.add('inputDiv')

    // const nameInputLabel = document.createElement('label');
    // nameInputLabel.setAttribute('for', 'name')
    // nameInputLabel.textContent = 'Item name'

    // const nameInput = document.createElement('input');
    // nameInput.setAttribute('type', "text");
    // nameInput.setAttribute('name', "name");

    // form.appendChild(nameInputDiv)
    // nameInputDiv.appendChild(nameInputLabel)
    // nameInputDiv.appendChild(nameInput)




}