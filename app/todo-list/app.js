
let formElement = document.getElementById('todo-form'),
    taskContainer = document.getElementById('task-container');

function handleDone(e){
    e.preventDefault();

    let currentElement = this;
        liEle = currentElement.parentNode,
        spanEle = liEle.querySelector('span');
    spanEle.classList.add('done');
}
function handleDelete(e){
    e.preventDefault();

    let currentElement = this;
        liEle = currentElement.parentNode;
    liEle.remove();
}

function handleEdit(e){
    e.preventDefault();
}

function addTask(e){
    e.preventDefault();
    //get input value
    let todoTaskEle = document.getElementById('todo-task'),
    todoTaskValue = todoTaskEle.value,

    //create new li element <li></li>
    liEle = document.createElement('li'),
    //create new span element <span></span>
    spanEle = document.createElement('span'),
    
    //add 'done' link <a href="#">Done</a>
    doneEle = document.createElement('a'),

    //add 'edit' link <a href="#">Edit</a>
    editEle = document.createElement('a'),

    //add 'delete' link <a href="#">Delete</a>
    deleteEle = document.createElement('a');

    //add input value inside the span <span>task</span>
    spanEle.innerHTML = todoTaskValue;

    //add class name for each a tag
    doneEle.classList.add('done-btn');
    editEle.classList.add('edit-btn');
    deleteEle.classList.add('delete-btn');

    //add text for each a tag
    doneEle.innerHTML = 'Done';
    editEle.innerHTML = 'Edit';
    deleteEle.innerHTML = 'Delete';

    //add href for each a tag
    doneEle.setAttribute('href', '#');
    editEle.setAttribute('href', '#');
    deleteEle.setAttribute('href', '#');


    // phase:2 add click event listener for all three links
    doneEle.addEventListener('click', handleDone);
    //editEle.addEventListener('click', handleEdit);
    deleteEle.addEventListener('click', handleDelete);
    //insert span tag inside 'li'
    liEle.appendChild(spanEle);

    //insert a.done tag inside "li"
    liEle.appendChild(doneEle);

    //insert a.edit tag inside "li"
    liEle.appendChild(editEle);

    //insert a.delete tag inside "li"
    liEle.appendChild(deleteEle);

    //insert li tag inside ol tag
    taskContainer.appendChild(liEle);
    todoTaskEle.value = '';
    //add click event listener for all three links
    //insert and span tag and other links inside 'li'

}
//on form submit

    formElement.addEventListener('submit', addTask);