

export default function about(){
    const conBox = document.querySelector('.content');
    const aboutCont = document.createElement('div');
    aboutCont.classList.add('aboutCont');

    const aboutBox = document.createElement('div')
    aboutBox.classList.add('aboutBox');

    const aboutText = document.createElement('p')
    aboutText.classList.add('aboutText');
    aboutText.textContent = `"Welcome to Putragis Restaurant: Where Bugs Become Bites!
    
    Greetings, adventurous eaters, and welcome to the buzzing world of Putragis Restaurant!
    
    At Putragis Restaurant, we're on a mission to revolutionize your taste buds one tiny leg at a time. Nestled in the heart of Bugsville, our restaurant offers a dining experience that's anything but ordinary. If you've ever wondered what a cricket croquette or a mealworm medley tastes like, you've come to the right place!
    
    Founded by a team of bug-enthusiasts-turned-chefs, Putragis Restaurant is not your average eatery. We believe that insects aren't just pests—they're culinary pioneers waiting to be explored. Our menu features a delightful array of dishes crafted from the finest locally sourced bugs, prepared with care and a dash of whimsy.
    
    Whether you're a seasoned bug-eater or a curious newcomer, our friendly staff is here to guide you through our menu. From crispy fried grasshoppers to savory silkworm stir-fry, each dish promises a delightful crunch and a burst of protein-packed flavor. And don't worry, we've mastered the art of making bugs look as appetizing as they taste!
    
    Join us at Putragis Restaurant, where every meal is an adventure and bugs are more than just friends—they're delicious! So grab your fork, summon your courage, and prepare to savor the unexpected. After all, life's too short to stick to the same old menu.
    
    See you soon at Putragis Restaurant—where bugs become bites that bite back!
    
   
    
   "`;


    aboutBox.appendChild(aboutText);
    aboutCont.appendChild(aboutBox);
    conBox.appendChild(aboutCont);
    



}