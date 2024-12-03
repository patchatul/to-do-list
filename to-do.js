const inputBox = document.getElementById('input-box');
const showList = document.getElementById('list');

function addToList() {
    if(inputBox.value === ''){
        alert("Do you wanna add something to the list?");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =inputBox.value;
        showList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "*"; //delete button
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

showList.addEventListener('click', function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tageName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)

function saveData(){
    localStorage.setItem('data', list.innerHTML)
}

function showData(){
    list.innerHTML = localStorage.getItem('data');
}
showData();