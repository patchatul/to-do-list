const addInput = document.getElementById('input-to-do');
const addButton = document.getElementByClass('add');
const showList = document.getElementById('list');

addButton.addEventListener("click", () =>{
    const input = addInput.value;
    if (input) {
        const toDoList = document.createElement('li');
        toDoList.textContent = input;
        showList.appendChild(toDoList);
        addToDo.value = '';
    }
});
