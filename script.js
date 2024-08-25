
document.getElementById('close').addEventListener('click', function() {
    window.close(); 
});


document.getElementById('add-important-task').addEventListener('click', function() {
    addTask('important-tasks', 'important');
});

document.getElementById('add-regular-task').addEventListener('click', function() {
    addTask('regular-tasks', 'regular');
});

function addTask(taskContainerId, taskType) {

    const newTaskDiv = document.createElement('div');
    newTaskDiv.className = `task ${taskType}-task`;


    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';

    const newTaskInput = document.createElement('input');
    newTaskInput.type = 'text';
    newTaskInput.placeholder = 'New Task';

    newTaskDiv.appendChild(newCheckbox);
    newTaskDiv.appendChild(newTaskInput);

    document.getElementById(taskContainerId).appendChild(newTaskDiv);
}
