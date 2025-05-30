
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('Add-btn'); 
const list = document.getElementById('todolist');


addBtn.addEventListener('click', () => {
    
    const task = input.value.trim();

    if (task) {
        
        const li = document.createElement('li');
        li.textContent = task;

        
        li.addEventListener('click', () => {
            li.classList.toggle('done');  
        });

        
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.style.marginLeft = '20px';
        delBtn.classList.add('delete-btn');

        
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation();  
            list.removeChild(li);
        });

        
        li.appendChild(delBtn);
        list.appendChild(li);

        
        input.value = '';
    } else {
        alert('Please Enter the Task!');
    }
});
