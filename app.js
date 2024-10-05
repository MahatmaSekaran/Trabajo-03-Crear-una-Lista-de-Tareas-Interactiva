const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Agregar tareas
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Por favor, ingresa una tarea.');
    }
});

// Función para agregar tarea
function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'delete';
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

// Eliminar tareas
taskList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        taskList.removeChild(li);
    }

    // Marcar como completada
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});
