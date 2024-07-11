

export default function popMenu() {
    const conBox = document.querySelector('.content')
    const menuCont = document.createElement('div');
    menuCont.classList.add('menuCont')

    let menuBox = document.createElement('div');
    menuBox.classList.add('menuBox')


    let menuName = document.createElement('div')
    menuName.classList.add('menuName');
    
    let menu1 = document.createElement('div')
    let menuT1 = document.createElement('h4')
    menuT1.textContent = "Bug Menu 1"
    let p1 = document.createElement('p')
    p1.textContent = `"Exotic bug bites on a stick"`
    menu1.appendChild(menuT1)
    menu1.appendChild(p1)


    let menu2 = document.createElement('div')
    let menuT2 = document.createElement('h4')
    menuT2.textContent = "Bug Menu 2"
    let p2 = document.createElement('p')
    p2.textContent = `"Exotic bug salad on a fork"`
    menu2.appendChild(menuT2)
    menu2.appendChild(p2)

    let menu3 = document.createElement('div')
    let menuT3 = document.createElement('h4')
     menuT3.textContent = "Bug Menu 3"
     let p3 = document.createElement('p')
     p3.textContent = `"Beef cake (with bugs inside!)"`
     menu3.appendChild(menuT3)
     menu3.appendChild(p3)


    menuName.appendChild(menu1)
    menuName.appendChild(menu2)
    menuName.appendChild(menu3)


    let menuImg  = document.createElement('div');
    let img1 = document.createElement('div')
    let img2 = document.createElement('div')
    let img3 = document.createElement('div')
    img1.classList.add('img1')
    img2.classList.add('img2')
    img3.classList.add('img3')

    menuImg.classList.add('menuImg')
    menuImg.appendChild(img1)
    menuImg.appendChild(img2)
    menuImg.appendChild(img3)


    menuBox.appendChild(menuName)
    menuBox.appendChild(menuImg)
    menuCont.appendChild(menuBox)
    conBox.appendChild(menuCont);
    
   
}