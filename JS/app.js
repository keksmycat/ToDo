const themeBtn = document.getElementById('themeB');

const taskInput = document.getElementById('GET-name');
const form = document.getElementById('forma');
const tasksList = document.getElementById('taskList');
const emptyList = document.querySelector('#liTask');




form.addEventListener('submit', function(event){
   
    event.preventDefault();

    const taskText = taskInput.value;
    const taskHTML = `<li class='fuck'>
        <p>${taskText}</p>
        <div class="button">
        <button id="greenBtn"><i class='bx bx-check' ></i></button>
        <button id="redBtn"><i class='bx bx-x' ></i></button>
    </div>
    </li>`;


tasksList.insertAdjacentHTML('beforeend', taskHTML);


taskInput.value = "";
taskInput.focus();


if(tasksList.children.length > 1){
    emptyList.classList.add('none');
}
})


tasksList.addEventListener('click', function(event){
    if(event.target.id === 'redBtn'){
        const parentNode = event.target.closest('li');
        parentNode.remove();
    }
    if(tasksList.children.length == 1){
        emptyList.classList.remove('none');
    }
})

tasksList.addEventListener('click', function(event){
    if(event.target.id === 'greenBtn'){
        const parentNode = event.target.closest('li');
        const taskP = parentNode.querySelector('p')
        taskP.classList.toggle('done-task');
    }
    if(tasksList.children.length == 1){
        emptyList.classList.remove('none');
    }
})




// Смена темы

themeBtn.addEventListener('click', function(){
    var element = document.body;
    element.classList.toggle("dark-mode");
})






