const task = [];

let time = 0;
let timer = null;
let timerBreake = null;
let current = null;

const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTaks');
const form = document.querySelector('#form');

form.addEventListener('submit', e =>{
    e.preventDefault ();
    if (itTask != '') {
        createTask(itTask.value);
        itTask.value = '';
    }
});

function createTask(value){

    const newTask = {
        id: (Math.random()*100).toString(36).slice(3),
        title: value,
        completed: false,
    }
    task.unshift(newTask);
    renderTask();   
}

function renderTask(){
    const html = task.map( e => {
        return `
        <div class="task">
            <div> class="completed">${task.completed ?`<span class="done">Done</span>`:`<button class="start-button" data-id=${task.id}>Start</button>`}</div>
            <div class="title">${task.title}</div>
        </div>
        `;
    });

    const taskContainer = document.querySelector("#task");
    taskContainer.innerHTML = html.join('');
}