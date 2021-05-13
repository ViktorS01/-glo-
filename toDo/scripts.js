'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

let todoData = [];

if(localStorage.getItem('todoData')){
    todoData = JSON.parse(localStorage.getItem('todoData'));
}

const render = function (){
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach (function (item){
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
            '<div class="todo-buttons">' + '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' + '</div>';
    
        if (item.completed){
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const btnTodoComplete = li.querySelector('.todo-complete');
        btnTodoComplete.addEventListener('click', function (){
            item.completed = !item.completed;
            render();
        });

        const btnTodoRemove = li.querySelector('.todo-remove');
        btnTodoRemove.addEventListener('click', function(){
            let index = todoData.indexOf(item);
            todoData.splice(index, 1);
            render();
        });
    });

    localStorage.setItem('todoData', JSON.stringify(todoData));
};

todoControl.querySelector('#add').addEventListener(
    'click', function (event){
        event.preventDefault();

        if (headerInput.value != ''){
            const newToDo = {
                value: headerInput.value,
                completed: false,
            };

            todoData.push(newToDo);

            render();
        }

        headerInput.value = '';
    }
);

window.addEventListener('keydown', function(event){
    if (event.keyCode === 13){
        event.preventDefault();

        if (headerInput.value != ''){
            const newToDo = {
                value: headerInput.value,
                completed: false,
            };

            todoData.push(newToDo);

            render();
        }

        headerInput.value = '';
    }
});

render();