export default function summaryPage(){
    const content = document.querySelector('.content');
    const summaryModalContent = document.querySelector('.summaryModalContent')
    
    summaryModalContent.innerHTML ='';


    
    // const pageContainer = document.createElement('div');
    // pageContainer.classList.add('pageContainer', 'summaryPage')
    // content.appendChild(pageContainer)


    const page = document.createElement('div');
    page.classList.add('page','summaryPage');
    summaryModalContent.appendChild(page);

    const form  = document.createElement('form');
    form.setAttribute('method', "get");
    form.classList.add('summaryForm')
    page.appendChild(form)

    form.innerHTML += `
    <div class="inputDiv">
        <label for="name">Item name</label>
        <input type="text" name="name" required />
    </div>
    `;



}