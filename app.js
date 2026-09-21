
let form = document.getElementById('form');
let input = document.getElementById('input');
let ul = document.getElementById('displayTask');


let allTask = JSON.parse(localStorage.getItem('tasks')) || []


//Display tasks after reload.
let showTask = () => {
    allTask.forEach((item) => {
        let newLi = document.createElement('li')
        let removeBtn = document.createElement('button')
        let read = document.createElement('button')

        removeBtn.innerText = 'Delete'
        removeBtn.className = 'delete-btn'

        read.innerText = item.isRead ? 'Read' : 'Mark as Read'
        read.className = 'read-btn'
        
        newLi.innerText = item.task
        newLi.style.textDecoration= item.isRead ? 'line-through' : ""
        newLi.append(read, removeBtn)

        ul.append(newLi)
    })
}

showTask()


//Task adding Feature
let addTask = () => {
 allTask.push({ task: input.value, isRead: false })
    localStorage.setItem('tasks', JSON.stringify(allTask))

    let newLi = document.createElement('li')
    let removeBtn = document.createElement('button')
    let read = document.createElement('button')

    removeBtn.innerText = 'Delete'
    removeBtn.className = 'delete-btn'

    read.innerText = 'Mark as Read'
    read.className = 'read-btn'

    newLi.innerText = input.value
    newLi.append(read, removeBtn)

    ul.append(newLi)
}


//Delete feature
const RemoveBtn = (innerText,parent) => {
        let newTaskList = allTask.filter((element) => element.task !== innerText)
        localStorage.setItem('tasks', JSON.stringify(newTaskList))
        parent.remove()
    }

let deleteBtn = Array.from(document.getElementsByClassName('delete-btn'))
deleteBtn.map((item) => {
    item.addEventListener('click', ()=>{
        RemoveBtn(item.parentElement.childNodes[0].data, item.parentElement)
    })
})


//Edit Feature
const updateBtn = (item,parent)=>{
     if(item.innerText === 'Mark as Read'){
            item.innerText = 'Read'
            let neededTask = allTask.find((element)=>{
               return element.task === parent.childNodes[0].data
            })
            if(neededTask){
                neededTask.isRead = true;
            }
            localStorage.setItem('tasks',JSON.stringify(allTask))
            parent.style.textDecoration = 'line-through'
        }
        else{
            item.innerText = "Mark as Read"
             let neededTask = allTask.find((element)=>{
               return element.task === parent.childNodes[0].data
            })
            if(neededTask){
                neededTask.isRead = false;
            }
            localStorage.setItem('tasks',JSON.stringify(allTask))
             parent.style.textDecoration = ''
        }
}

let editBtns = Array.from(document.getElementsByClassName('read-btn'))
editBtns.map((item)=>{
    item.addEventListener('click', ()=>{
        updateBtn(item, item.parentElement)
       
    })
})




//Form handling
form.addEventListener('submit', (event) => {
    event.preventDefault()
    // let formData = new FormData(form);
   
    addTask()
    input.value = ""
})