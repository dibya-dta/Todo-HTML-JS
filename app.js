



//Todo app
// let form = document.getElementById('form');
// let input = document.getElementById('input');
// let ul = document.getElementById('displayTask');


// let allTask = JSON.parse(localStorage.getItem('tasks')) || []


// //Display tasks after reload.
// let showTask = () => {
//     allTask.forEach((item) => {
//         let newLi = document.createElement('li')
//         let removeBtn = document.createElement('button')
//         let read = document.createElement('button')

//         removeBtn.innerText = 'Delete'
//         removeBtn.className = 'delete-btn'

//         read.innerText = item.isRead ? 'Read' : 'Mark as Read'
//         read.className = 'read-btn'
        
//         newLi.innerText = item.task
//         newLi.style.textDecoration= item.isRead ? 'line-through' : ""
//         newLi.append(read, removeBtn)

//         ul.append(newLi)
//     })
// }

// showTask()


// //Task adding Feature
// let addTask = () => {
//  allTask.push({ task: input.value, isRead: false })
//     localStorage.setItem('tasks', JSON.stringify(allTask))

//     let newLi = document.createElement('li')
//     let removeBtn = document.createElement('button')
//     let read = document.createElement('button')

//     removeBtn.innerText = 'Delete'
//     removeBtn.className = 'delete-btn'

//     read.innerText = 'Mark as Read'
//     read.className = 'read-btn'

//     newLi.innerText = input.value
//     newLi.append(read, removeBtn)

//     ul.append(newLi)
// }


// //Delete feature
// const RemoveBtn = (innerText,parent) => {
//         let newTaskList = allTask.filter((element) => element.task !== innerText)
//         localStorage.setItem('tasks', JSON.stringify(newTaskList))
//         parent.remove()
//     }

// let deleteBtn = Array.from(document.getElementsByClassName('delete-btn'))
// deleteBtn.map((item) => {
//     item.addEventListener('click', ()=>{
//         RemoveBtn(item.parentElement.childNodes[0].data, item.parentElement)
//     })
// })


// //Edit Feature
// const updateBtn = (item,parent)=>{
//      if(item.innerText === 'Mark as Read'){
//             item.innerText = 'Read'
//             let neededTask = allTask.find((element)=>{
//                return element.task === parent.childNodes[0].data
//             })
//             if(neededTask){
//                 neededTask.isRead = true;
//             }
//             localStorage.setItem('tasks',JSON.stringify(allTask))
//             parent.style.textDecoration = 'line-through'
//         }
//         else{
//             item.innerText = "Mark as Read"
//              let neededTask = allTask.find((element)=>{
//                return element.task === parent.childNodes[0].data
//             })
//             if(neededTask){
//                 neededTask.isRead = false;
//             }
//             localStorage.setItem('tasks',JSON.stringify(allTask))
//              parent.style.textDecoration = ''
//         }
// }

// let editBtns = Array.from(document.getElementsByClassName('read-btn'))
// editBtns.map((item)=>{
//     item.addEventListener('click', ()=>{
//         updateBtn(item, item.parentElement)
       
//     })
// })




// //Form handling
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     // let formData = new FormData(form);
   
//     addTask()
//     input.value = ""
// })





//Debounce
// let input = document.getElementById("input")
// let p = document.getElementById("para")


// const callingFN = ()=>{
//      let timer;

//     return function (){
//         clearTimeout(timer)
//        timer = setTimeout(() => {
//             p.innerText = input.value
            
//         }, 2000);
//     }
// }

// input.addEventListener("input", callingFN())






// //Throttle
// let button = document.getElementById("button")

// const callingFN = (delay)=>{
//     let lastTime = 0;

//     return function(){
//         const now = Date.now();
//         if(now - lastTime >= delay){
//             console.log("clicked....")
//             lastTime = now
//         }
//     }
// }

// button.addEventListener("click",callingFN(2000))







//OOPs concept

class User {
    constructor(name, status){
        this.name= name,
        this.status = status
    }


    greet(){
        console.log(`hello ${this.name}, Your status is ${this.status}`)
    }

    logout(){
        this.status = "Deactivate"
        console.log(`Hello ${this.name}, Your status is now ${this.status}`)
    }

}

const user1 = new User("Raj", "active")
console.log(user1.name, user1.status) //output : Raj, active
user1.greet()
user1.logout()

user1.name = "aman"
console.log(user1.name, user1.status) //output : aman, active


class Animal{
    eat(){
        console.log('eating')
    }
}
class Dog extends Animal{
    bark(){
        console.log("bhau bhau")
    }
}

const dog1 = new Dog()
dog1.eat() //output : eating
dog1.bark() 


class Car {
  start() {
    this.#checkEngine();
    console.log("Car started");
  }

  #checkEngine() {
    console.log("Checking engine...");
  }
}

const car = new Car();

car.start();
