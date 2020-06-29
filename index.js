/*document.querySelectorAll("button")[0].addEventListener("click", handleClick);

document.querySelectorAll("button")[1].addEventListener("click", handleClick)

document.querySelectorAll("button")[2].addEventListener("click", handleClick)

document.querySelectorAll("button")[3].addEventListener("click", handleClick)

document.querySelectorAll("button")[4].addEventListener("click", handleClick)

document.querySelectorAll("button")[5].addEventListener("click", handleClick)

document.querySelectorAll("button")[6].addEventListener("click", handleClick)

function handleClick()
{
    alert("I've been clicked");
}

*/


//or just loop through the array of buttons with For Loop

var numberOfDrumBeat = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumBeat; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);   
}


function handleClick()
{
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) 
    {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;            
    
        default: Console.log(buttonInnerHTML);
            break;
    }

    buttonAnimation(buttonInnerHTML);
}



    
    
    function makeSound(event)
    {
        switch (event.key) 
        {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
                
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            

            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;

            case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

            case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;            
        
            default: Console.log(buttonInnerHTML);
                break;
        }
        buttonAnimation(event.key);
    }

    document.addEventListener("keypress", makeSound);

    function buttonAnimation(currentKey)
    {
        var activeButton = document.querySelector("." +currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }