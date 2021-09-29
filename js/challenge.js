let counterValue = document.getElementById('counter')

setInterval(setTime,1000)

function setTime(){
        counterValue.innerText = ++counterValue.innerText   
}

const minusBttn = document.getElementById('minus')

minusBttn.addEventListener('click',removeTime)

function removeTime(){
    counterValue.innerText = counterValue.innerText - 1
}
const addBttn = document.getElementById('plus')

addBttn.addEventListener('click',addTime)

function addTime(){
    counterValue.innerText = ++counterValue.innerText
}

const likeBar = document.getElementsByClassName('likes')

const heart = document.getElementById('heart')
heart.addEventListener('click',addLike)

// function addLike(){
//     const like = document.createElement('li')
//     const likeText = document.createTextNode("this is text")
//     like.appendChild(whenLike)
//     likeBar.appendChild(like)
    
// }

const pauseBttn = document.getElementById('pause')
pauseBttn.addEventListener('click', puauseEvents)

function pauseEvents(){
    // if something is in a state, then pause, if not, then release
    

}