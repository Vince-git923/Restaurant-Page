import popHome from './home.js'
import popMenu from './menu.js'
import about from './about.js'
import './style.css'




const contBox = document.querySelector('.content')
const menuBtn = document.querySelector(".menuBtn")
const homeBtn = document.querySelector('.homeBtn');
const aboutBtn = document.querySelector('.aboutBtn')

popHome()


menuBtn.addEventListener('click', ()=>{
    
    clearCont()
    popMenu();
})

homeBtn.addEventListener('click', () =>{
    
    clearCont()
    popHome()
})

aboutBtn.addEventListener('click', ()=>{
    clearCont()
    about();
})

function clearCont() {
    let child = contBox.lastElementChild;
    while (child) {
        contBox.removeChild(child);
        child = contBox.lastElementChild
    }
}

