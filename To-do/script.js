
const input = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

function addTask(){
    if(input.value === ''){
        alert("Write Task!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// now lets add whenever we open webpage it opens same

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// now to display saved-data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();