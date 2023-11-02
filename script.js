// Create three variables that hold references to the list (<ul>Links to an external site.), <input>Links to an external site., and <button>Links to an external site. elements. Use document.querySelector()
const list = document.querySelector('#list');
const form = document.querySelector('#addToList');
const input = document.querySelector('#itemToAdd');

// Create a functionLinks to an external site. that will run in response to the button being clicked.
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoValue = input.value;
    
    const newListItem = document.createElement('li');

    const newSpan = document.createElement('span');
    newSpan.innerText = todoValue;
    newListItem.appendChild(newSpan);


    const deletebtn = document.createElement('button');
    deletebtn .innerText = ("Delete");

    deletebtn .addEventListener('click', function(event) {
        const btn = event.target;
        const parent = btn.parentNode;

        parent.remove();
    })


    newListItem.appendChild(deletebtn);

    





    list.appendChild(newListItem)

    input.value = '';
    input.focus();
})