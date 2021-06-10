
//Créer la variable duck depuis la LI du HTML
const duckElement = document.querySelector(".duck");
//CHANGER la fontion pour que le cube devienne rouge **function ***kill*** que j'ai créer**
let mousePoint=0;
function shoot() {
    //removeEventListener()
    clearTimeout(timer);
    alert("Mouse WIN!!!!");
    duckEl.style.transitionDuration = "1s";
    duckEl.style.top = "100%";
    duckEl.style.left = "100%";
    duckEl.style.transform = "rotate(180deg)";
    duckElement.classList.add("red");
    mousePoint ++;

}
function updateScore(score){
    document.querySelector('h1').innerText = 'points :' +score;
}
updateScore(mousePoint);
function gameOverMouse(){
    
    document.removeEventListener("keydown", move);
    duckElement.removeEventListener("click",shoot);
    
}
duckElement.addEventListener('click', shoot);
