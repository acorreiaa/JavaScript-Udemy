const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim(); //trim(): tirando os espaços
    
    if(todo.length){
        generateTemplate(todo); //a função de colocar a frase na lista
        addForm.requestFullscreen();
    }
});

// delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        console.log(e.target);
    }

});