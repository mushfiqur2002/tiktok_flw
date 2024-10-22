function createBubble() {
    const section = document.querySelector('section');
    const createEle = document.createElement('span');
    var size = Math.random() * 60;
    // let iconColor='';

    // Array of Font Awesome icon class names
    const icons = ['fa-heart', 'fa-thumbs-up', 'fa-laugh', 'fa-grin', 'fa-angry'];

    // Randomly select an icon class
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    // Add Font Awesome icon to the span
    // console.log(randomIcon)
    // if(randomIcon == "fa-heart"){
    //     iconColor = 'red';
    // }else if(randomIcon =='fa-thumbs-up'){
    //     iconColor = "blue"    
    // }else if(randomIcon =='fa-grin'){
    //     iconColor = "green"    
    // }
    createEle.innerHTML = `<i class="fas ${randomIcon}"></i>`;

    // Set span size and position
    createEle.style.width = 20 + size + 'px';
    createEle.style.height = 20 + size + 'px';
    createEle.style.left = Math.random() * innerWidth + "px";
    
    // Calculate font size based on span size (proportional to the width)
    const fontSize = (20 + size) * 0.5; // For example, 50% of the span's width
    createEle.querySelector('i').style.fontSize = fontSize + 'px';  // Adjust font size

    section.appendChild(createEle);

    // Remove bubble after 4 seconds
    setTimeout(() => {
        createEle.remove();
    }, 4000);
}

setInterval(createBubble, 800);
