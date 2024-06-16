document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const priorityInput = document.getElementById('priority-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();

        const taskText = taskInput.value;
        const taskPriority = priorityInput.value;

        const taskItem = document.createElement('li');
        taskItem.className = `priority-${taskPriority}`;

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const actions = document.createElement('div');
        actions.className = 'actions';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editTask(taskItem, taskContent));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(taskItem));

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        taskItem.appendChild(taskContent);
        taskItem.appendChild(actions);

        taskList.appendChild(taskItem);

        taskInput.value = '';
    }

    function editTask(taskItem, taskContent) {
        const newText = prompt('Edit your task:', taskContent.textContent);
        if (newText !== null) {
            taskContent.textContent = newText;
        }
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});
