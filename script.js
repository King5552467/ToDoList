const input = document.querySelector('#newtask input');
const btn = document.querySelector('#add');
const added = document.querySelector('#task');

btn.addEventListener('click', function(){
    // ADDING AN ALERT FOR EMPTY INPUT
    if(input.value === ''){
        swal({
            title: "Empty task!",
            text: "You did not add any task!",
            icon: "warning",
            button: "Add a task",
        });
    }else{
        document.querySelector('#tasks').innerHTML +=
        `<div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">&times;</button>
        </div>`
    };

    // CLEARING THE INPUT AFTER ADDING TASK
    input.value = '';

    // DELETING TASK
    const CT = document.querySelectorAll('.delete');
        for(var i=0; i < CT.length; i++){
            CT[i].addEventListener('click', function(){
                this.parentNode.remove();
                swal({
                    title: "Done!",
                    text: "You have successfully deleted a task!",
                    icon: "success",
                    button: "Go back!",
                })
            });
    };

    // CROSSING OFF A COMPLITED TASK
    const tasks = document.querySelectorAll('span');
    for(var i = 0; i < tasks.length; i++){
        tasks[i].addEventListener('click', function(){
            this.classList.toggle('completed');
        });
    };

});