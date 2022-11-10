const computerChoice = document.getElementsByClassName('computerChoice');
const rockIcon = document.getElementById('rock')
const paperIcon = document.getElementById('paper')
const scissorIcon = document.getElementById('scissor')
const result = document.getElementById('result');
const clickSound = new Audio('ting.mp3');
const victorySound = new Audio('victorySound.mp3');
const failSound = new Audio('fail.mp3');
let display
let userchoice
let RandomNum



const rock =document.getElementById('1').addEventListener('click',()=>{
    display = 0
    clickSound.currentTime = 0;
    clickSound.play();
    comChoice ()
    win()
});
const paper =document.getElementById('2').addEventListener('click',()=>{
    display = 1
    clickSound.currentTime = 0;
    clickSound.play();
    comChoice ()
    win()
});
const scissor =document.getElementById('3').addEventListener('click',()=>{
    display = 2
    clickSound.currentTime = 0;
    clickSound.play();
    comChoice ()
    win()
});

// conputer choice function
function comChoice (){
    RandomNum = parseInt(Math.random()*3);
    console.log(RandomNum)
    if(RandomNum === 0){
        rockIcon.style.display = "block"
        paperIcon.style.display = "none"
        scissorIcon.style.display = "none"
    }
    if(RandomNum === 1){
        rockIcon.style.display = "none"
        paperIcon.style.display = "block"
        scissorIcon.style.display = "none"
    }
    if(RandomNum === 2){
        rockIcon.style.display = "none"
        paperIcon.style.display = "none"
        scissorIcon.style.display = "block"
    }
}

// win check
function win(){
    console.log(display+RandomNum)
    if(display === RandomNum ){
        result.innerHTML = "Its a tie";
    }
    if(display === 0 && RandomNum=== 1 ){
        result.innerHTML = "You Lost ! Try Again";
        failSound.currentTime=0;
        failSound.play();
    }
    if(display === 0 && RandomNum=== 2 ){
        result.innerHTML = "You Win!!";
        victorySound.currentTime = 0;
        victorySound.play();
    }
    if(display === 1 && RandomNum=== 0 ){
        result.innerHTML = "You Win!!";
        victorySound.currentTime =0;
        victorySound.play();
    }
    if(display === 1 && RandomNum=== 2 ){
        result.innerHTML = "You Lost ! Try Again";
        failSound.currentTime=0;
        failSound.play();
    }
    if(display === 2 && RandomNum=== 0 ){
        result.innerHTML = "You Lost ! Try Again";
        failSound.currentTime=0;
        failSound.play();
    }
    if(display === 2 && RandomNum=== 1 ){
        result.innerHTML = "You Win !!";
        victorySound.currentTime =0;
        victorySound.play();
    }
}
// let button = document.getElementsByClassName('button');
// Array.from(button).forEach(element=>{
//     element.addEventListener('click', (e)=>{
//         userchoice = e.target.id;
//         console.log("clicked")
//         document.getElementById('display').innerHTML =userchoice;
//     })
// })
//I was tryins with a short code But i dont know why it didnt work so,I made a detailed code.