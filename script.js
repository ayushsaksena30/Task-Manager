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

    newCheckbox.addEventListener('change', function() {
        if (this.checked) {
            newTaskInput.style.textDecoration = 'line-through'; // Strike through the task
            moveTaskToBottom(taskContainerId, newTaskDiv); // Move to the bottom
            showAppreciationPopup(); // Show appreciation popup
        } else {
            newTaskInput.style.textDecoration = 'none'; // Remove strike through if unchecked
        }
    });

    newTaskDiv.appendChild(newCheckbox);
    newTaskDiv.appendChild(newTaskInput);

    document.getElementById(taskContainerId).appendChild(newTaskDiv);
}

function moveTaskToBottom(taskContainerId, taskDiv) {
    const taskContainer = document.getElementById(taskContainerId);
    taskContainer.removeChild(taskDiv);
    taskContainer.appendChild(taskDiv);
}

function showAppreciationPopup() {
    // Create a popup div
    const popupDiv = document.createElement('div');
    popupDiv.className = 'appreciation-popup';
    popupDiv.textContent = 'Great job!';

    // Style the popup div
    Object.assign(popupDiv.style, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        fontSize: '1.5em',
        textAlign: 'center',
        zIndex: '1000'
    });

    document.body.appendChild(popupDiv);

    // Remove the popup after 2 seconds
    setTimeout(() => {
        document.body.removeChild(popupDiv);
    }, 2000);
}
