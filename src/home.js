

export default function popHome() {
    const conBox = document.createElement('div')
    conBox.classList.add('home')
    const box = document.querySelector('.content');
   
    
        const Rname = document.createElement('div')
        const title  = document.createElement('h3');
        const imgRight = document.createElement('div')
        const leftDiv = document.createElement('div');
        const imgContR = document.createElement('div')
        imgContR.classList.add('imgContR');
        imgRight.appendChild(imgContR);
        leftDiv.classList.add('leftDiv')
        imgRight.classList.add('imgRight');
        Rname.textContent  = 'Putragis Restaurant'
        Rname.classList.add('rName')
        title.textContent = `"ENJOY EXOTIC CUISINES!"`
        const callTo = document.createElement('button');
        callTo.classList.add("hBtn")
        callTo.textContent = 'Reserve Seat Now!'
        
        
        leftDiv.appendChild(Rname);
        leftDiv.appendChild(title);
        leftDiv.appendChild(callTo);

    conBox.appendChild(leftDiv)
    conBox.appendChild(imgRight);
   
    box.appendChild(conBox);
}

