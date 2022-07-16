/*const body = document.body;

body.addEventListener('click', () => {
    body.innerHTML = '<h1>Hello, world!</h1>'
}); //addEventListener is a function that waits for an event to occur
*/


const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
/*const items = document.querySelectorAll('li');
const highlights = document.querySelectorAll('.highlight');


for ( const highlight of highlights) {
    highlight.style.backgroundColor = 'cornsilk';

}


//changes color of all list items with the tag <li> 
for ( let i = 0; i < items.length; i++) {
    items[i].style.color = 'orchid';
} */

// border appears once clicking the first main button
btnCreate.addEventListener('click', () => {
    //button.style.border = 'solid 2px red';
    /*headline.style.border = 'solid 2px red';*/
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');

    list.insertAdjacentHTML(
        'afterbegin',
        `<li>${input.value}</li>`
    );
    input.value = '';
    // const item = document.createElement('li');
    //const headline = document.getElementById('headline');
    // headline.textContent = input.value;
    // item.textContent=input.value;
    // list.prepend(item);
    //headline.className = ('grow');
    
});

btnRemove.addEventListener('click', () => {
    const lastItem = document.querySelector('li:last-child');
    lastItem.remove();
});


btnToggle.addEventListener ('click', () => {
    const listContainer = document.querySelector('.list-container');
    
    if (listContainer.style.display === 'none') {
        btnToggle.textContent = 'Hide List';
        listContainer.removeAttribute('style');
    } else {
        btnToggle.textContent = 'Show List'
        listContainer.style.display= 'none';
    }
})


