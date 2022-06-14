//teksta konteinera izveide
let showKeyDown = document.createElement("div");
showKeyDown.className = "keyDown_container";
const bodyContainer = document.querySelector(".body_container");
bodyContainer.append(showKeyDown);


//Standarta ieraksts
var message = "Te rādam nospiesto taustiņu";
showKeyDown.innerHTML = message;

function displayMessage(message){
    showKeyDown.innerHTML = message;
    
};

//apļa kustība
function circleMoves (message){


    const circle = document.querySelector(".circle");
    const style = window.getComputedStyle(circle);

    
    let marginLeft = parseInt(style['margin-left'],10);
    
    let marginTop = parseInt(style['margin-top'],10);

    let backgroundColor = style['background-color'];
    
    const positive = 20;
    const negative = -20;
    
    // moves LEFT
    if(message === "ArrowLeft"){
        let newValue = (marginLeft + negative).toString() + "px";
        circle.style.marginLeft = newValue;
    };

    //moves RIGHT
    if(message === "ArrowRight"){
        let newValue = (marginLeft + positive).toString() + "px";
        circle.style.marginLeft = newValue;
    };

    //moves UP    
   if(message === "ArrowUp"){
       newValue = (marginTop + negative).toString() + "px";
       circle.style.marginTop = newValue;
    };
    
    //moves DOWN
    if(message === "ArrowDown"){
        newValue = (marginTop + positive).toString() + "px";
        circle.style.marginTop = newValue;
    };

    //changes the color
    if(message === "Space"){
        let randomColors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple', 'pink'];
        newColor = randomColors[Math.floor(Math.random() * randomColors.length)];
        circle.style.backgroundColor = newColor;
    };
};


//Nospiestā taustiņa klausīšanās
document.addEventListener('keydown', showTheKey);
function showTheKey (event){
    event.preventDefault();

    let keyDown = event.code;
    console.log(keyDown);
  
   switch (keyDown) {
    case "ArrowUp" :
        message = "ArrowUp";
        break;
    case "ArrowDown" : 
    message = "ArrowDown";
        break;
    case "ArrowRight" : 
    message = "ArrowRight";
        break;
    case "ArrowLeft" : 
    message = "ArrowLeft";
        break;
    case "Space" : 
    message = "Space";
        break;
    default:
        
        message = "No value found";
    };
    //return message;
    displayMessage(message);
   
    circleMoves(message);
};

   

